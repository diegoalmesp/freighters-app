import React, { useState } from "react";

import { useAppDispatch } from "../../hooks";
import { filter } from "../../reducers/freightersSlice";

import SearchFormComponent, { FormValuesProps } from "../../components/Form";

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [prevValues, setPrevValues] = useState<FormValuesProps>();

  function liveListUpdate(values: FormValuesProps) {
    if (values !== prevValues) {
      let filters: FormValuesProps = { ...values };
      if (values.country_orig === "") {
        filters.base = "";
      }
      if (values.country_dest === "") {
        filters.destinations = "";
      }
      setPrevValues(values);
      dispatch(filter(filters));
    }
  }

  return (
    <div>
      <SearchFormComponent liveUpdate={liveListUpdate} />
    </div>
  );
};

export default SearchForm;
