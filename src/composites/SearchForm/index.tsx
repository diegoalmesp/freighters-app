import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import {
  FormHeader,
  TransportRadios,
  FormSection,
  FormContainer,
} from "./styles";

import { useAppDispatch } from "../../hooks";
import { filter } from "../../reducers/freightersSlice"; // filterByTransportType
import { OrangeButton } from "../../components/Buttons";

import FILTERS from "../../data/filters";

interface MyFormValues {
  transport_type: string;
  countryOrig: string;
  base: string;
  countryDest: string;
  destinations: string;
  cbm: string;
}

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [prevValues, setPrevValues] = useState<MyFormValues>();

  const initialValues: MyFormValues = {
    transport_type: "",
    countryOrig: "",
    base: "",
    countryDest: "",
    destinations: "",
    cbm: "",
  };

  function liveListUpdate(values: MyFormValues) {
    if (values !== prevValues) {
      let filters: MyFormValues = { ...values };
      if (values.countryOrig === "") {
        filters.base = "";
      }
      if (values.countryDest === "") {
        filters.destinations = "";
      }
      setPrevValues(values);
      dispatch(filter(filters));
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}>
        {({ values, handleChange }) => {
          liveListUpdate(values);
          return (
            <Form>
              <FormContainer>
                <FormHeader>
                  <div id="my-radio-group">Transport Mode</div>
                  <TransportRadios
                    role="group"
                    aria-labelledby="my-radio-group">
                    {FILTERS.transport_type.map((f, index) => (
                      <label>
                        <Field type="radio" name="transport_type" value={f} />
                        {f}
                      </label>
                    ))}
                  </TransportRadios>
                </FormHeader>

                <FormSection>
                  <h3>Origin</h3>
                  <label htmlFor="countryOrig">Country</label>
                  <CountryDropdown
                    value={values.countryOrig}
                    name="countryOrig"
                    onChange={(_, e) => handleChange(e)}
                  />

                  <label htmlFor="base">Region</label>
                  <RegionDropdown
                    country={values.countryOrig}
                    name="base"
                    value={values.base}
                    onChange={(_, e) => handleChange(e)}
                  />
                </FormSection>
                <FormSection>
                  <h3>Destination</h3>
                  <label htmlFor="countryDest">Country</label>
                  <CountryDropdown
                    value={values.countryDest}
                    name="countryDest"
                    onChange={(_, e) => handleChange(e)}
                  />

                  <label htmlFor="destinations">Region</label>
                  <RegionDropdown
                    country={values.countryDest}
                    name="destinations"
                    value={values.destinations}
                    onChange={(_, e) => handleChange(e)}
                  />
                </FormSection>

                <FormSection>
                  <h3>CBM</h3>
                  <Field as="select" name="cbm">
                    <option defaultValue="" value="">
                      Select CMB
                    </option>
                    {FILTERS.cbm.map((cbm, index) => (
                      <option value={cbm}>{cbm} &#13221;</option>
                    ))}
                  </Field>
                </FormSection>

                <OrangeButton type="reset">Reset Fields</OrangeButton>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SearchForm;
