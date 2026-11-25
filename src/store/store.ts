import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import jobsReducer from "./jobsSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
