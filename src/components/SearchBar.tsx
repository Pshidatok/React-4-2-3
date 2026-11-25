
import { Button, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState, type FormEvent } from "react";
import { useAppDispatch } from "../store/hooks";
import { setSearch } from "../store/filtersSlice";

export function SearchBar() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearch(value.trim()));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-group">
        <TextInput
          className="search-input"
          placeholder="Поиск по названию или компании..."
          leftSection={<IconSearch size={18} />}
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
        />

        <Button className="search-button" type="submit">
          Найти
        </Button>
      </div>
    </form>
  );
}
