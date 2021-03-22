import { RootState } from "../store";

export const selectFreigtersList = (state: RootState) =>
  state.freighters.freightersList;

export const selectFreighterDetails = (state: RootState) =>
  state.freighters.selectedFreighter;
