import { createSlice } from "@reduxjs/toolkit";
import DATA from "../data/index";
import { Freighters } from "../data/types";

interface InitialState {
  freightersList: Freighters[];
  selectedFreighter: any;
}

export const initialState: InitialState = {
  freightersList: [],
  selectedFreighter: null,
};

export const freightersSlice = createSlice({
  name: "freighters",
  initialState,
  reducers: {
    populateFreighters: (state) => {
      state.freightersList = DATA;
    },
    filter: (state, action) => {
      const { transport_type, base, destinations, cbm } = action.payload;

      let filteringData: Freighters[] = DATA;
      if (transport_type !== "")
        filteringData = [
          ...filteringData.filter((f) =>
            f.transport_type.includes(transport_type)
          ),
        ];
      if (base !== "")
        filteringData = [...filteringData.filter((f) => f.base.includes(base))];
      if (destinations !== "")
        filteringData = [
          ...filteringData.filter((f) => f.destinations.includes(destinations)),
        ];
      if (cbm !== "")
        filteringData = [...filteringData.filter((f) => f.cbm === cbm)];

      state.freightersList = filteringData;
      console.log(filteringData);
    },
    search: (state, action) => {
      state.selectedFreighter = {
        ...DATA.find((f) => f.id === action.payload),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateFreighters, filter, search } = freightersSlice.actions;

export default freightersSlice.reducer;
