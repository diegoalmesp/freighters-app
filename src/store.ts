import { configureStore } from "@reduxjs/toolkit";
import freightersReducer from "./reducers/freightersSlice";

const store = configureStore({
  reducer: {
    freighters: freightersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
