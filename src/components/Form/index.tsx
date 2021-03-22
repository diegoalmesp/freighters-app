import React from "react";
import { Formik, Form, Field } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import FILTERS from "../../data/filters";
import { OrangeButton } from "../Buttons";
import {
  FormContainer,
  FormHeader,
  TransportRadios,
  FormSection,
} from "./styles";

export interface FormProps {
  liveUpdate: (values: FormValuesProps) => void;
}

export interface FormValuesProps {
  transport_type: string;
  country_orig: string;
  base: string;
  country_dest: string;
  destinations: string;
  cbm: string;
}

const SearchFormComponent: React.FC<FormProps> = ({ liveUpdate }) => {
  const initialValues: FormValuesProps = {
    transport_type: "",
    country_orig: "",
    base: "",
    country_dest: "",
    destinations: "",
    cbm: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}>
      {({ values, handleChange }) => {
        liveUpdate(values);
        return (
          <Form data-testid="search_form">
            <FormContainer>
              <FormHeader>
                <div id="my-radio-group">Transport Mode</div>
                <TransportRadios role="group" aria-labelledby="my-radio-group">
                  {FILTERS.transport_type.map((f, index) => (
                    <label key={index}>
                      <Field
                        type="radio"
                        name="transport_type"
                        data-testid="transport_type"
                        value={f}
                      />
                      {f}
                    </label>
                  ))}
                </TransportRadios>
              </FormHeader>

              <FormSection>
                <h3>Origin</h3>
                <label htmlFor="country_orig">Country</label>
                <CountryDropdown
                  value={values.country_orig}
                  name="country_orig"
                  onChange={(_, e) => handleChange(e)}
                  data-testid="country_orig"
                />

                <label htmlFor="base">Region</label>
                <RegionDropdown
                  country={values.country_orig}
                  name="base"
                  value={values.base}
                  onChange={(_, e) => handleChange(e)}
                  data-testid="base"
                />
              </FormSection>
              <FormSection>
                <h3>Destination</h3>
                <label htmlFor="country_dest">Country</label>
                <CountryDropdown
                  value={values.country_dest}
                  name="country_dest"
                  onChange={(_, e) => handleChange(e)}
                  data-testid="country_dest"
                />

                <label htmlFor="destinations">Region</label>
                <RegionDropdown
                  country={values.country_dest}
                  name="destinations"
                  value={values.destinations}
                  onChange={(_, e) => handleChange(e)}
                  data-testid="destinations"
                />
              </FormSection>

              <FormSection>
                <h3>CBM</h3>
                <Field as="select" name="cbm" data-testid="cbm-select">
                  <option defaultValue="" value="">
                    Select CMB
                  </option>
                  {FILTERS.cbm.map((cbm, index) => (
                    <option key={index} value={cbm} data-testid="cbm-option">
                      {cbm} &#13221;
                    </option>
                  ))}
                </Field>
              </FormSection>

              <OrangeButton type="reset">Reset Fields</OrangeButton>
            </FormContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchFormComponent;
