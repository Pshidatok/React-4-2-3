
import { Select } from "@mantine/core";
import { CITIES } from "../constants";
import { setCity } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { SkillsFilter } from "./SkillsFilter";

export function Filters() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(state => state.filters.city);

  return (
    <div className="filters">
      <div className="filter-section">
        <SkillsFilter />
      </div>

      <div className="filter-section city-select">
        <Select
          label="Город"
          data={CITIES}
          value={city}
          allowDeselect={false}
          onChange={value => {
            if (value) dispatch(setCity(value));
          }}
        />
      </div>
    </div>
  );
}
