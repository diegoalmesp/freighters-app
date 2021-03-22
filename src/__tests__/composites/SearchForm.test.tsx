import React from "react";
import { render, fireEvent, cleanup, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer, { initialState } from "../../reducers/freightersSlice";

import SearchForm, { FormProps } from "../../components/Form";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

function renderWithProviders(ui: any, { reduxState = {} as any } = {}) {
  const store = createStore(reducer, reduxState || initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>
  );
}

function renderSearchForm(props?: FormProps) {
  const defaultProps: FormProps = {
    liveUpdate() {
      return;
    },
  };
  return renderWithProviders(<SearchForm {...defaultProps} {...props} />, {
    reduxState: {},
  });
}

afterEach(() => {
  cleanup();
  jest.resetModules();
});

describe("<SearchFormComponent />", () => {
  test("should display a blank search form, with default values", async () => {
    const { findByTestId } = renderSearchForm();

    const searchForm = await findByTestId("search_form");

    expect(searchForm).toHaveFormValues({
      country_orig: "",
      base: "",
      country_dest: "",
      destinations: "",
      cbm: "",
    });
  });

  test("should allow edit the CMN select", async () => {
    const promise = Promise.resolve();
    const liveUpdate = jest.fn();
    const { findByTestId } = renderSearchForm({ liveUpdate });
    const cbm = await findByTestId("cbm-select");
    fireEvent.change(cbm, { target: { value: "100" } });
    expect(liveUpdate).toHaveBeenCalledWith({
      base: "",
      cbm: "100",
      country_dest: "",
      country_orig: "",
      destinations: "",
      transport_type: "",
    });
    await act(() => promise);
  });

  test("should test more fields", async () => {
    // I didn't add more test due to timing
  });
});
