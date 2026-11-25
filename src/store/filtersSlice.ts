import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ALL_CITIES } from "../constants";
import type { Filters } from "../types";

const initialState: Filters = {
  search: "",
  city: ALL_CITIES,
  skills: ["JavaScript", "React", "Redux", "Python"],
  page: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = 1;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
      state.page = 1;
    },
    addSkill(state, action: PayloadAction<string>) {
      const skill = action.payload.trim();
      if (!skill || state.skills.includes(skill)) return;

      state.skills.push(skill);
      state.page = 1;
    },
    removeSkill(state, action: PayloadAction<string>) {
      state.skills = state.skills.filter(skill => skill !== action.payload);
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearch, setCity, addSkill, removeSkill, setPage } =
  filtersSlice.actions;
export default filtersSlice.reducer;
