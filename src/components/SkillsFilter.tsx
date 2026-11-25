
import { Button, Pill, Text, TextInput } from "@mantine/core";
import { useState, type FormEvent } from "react";
import { addSkill, removeSkill } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function SkillsFilter() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector(state => state.filters.skills);
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addSkill(value));
    setValue("");
  };

  return (
    <div>
      <Text className="skills-label">
        Ключевые навыки
      </Text>

      <form className="skill-form" onSubmit={handleSubmit}>
        <TextInput
          className="skill-input"
          placeholder="Добавить навык..."
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
        />

        <Button
          className="skill-button"
          type="submit"
          aria-label="Добавить навык"
        >
          +
        </Button>
      </form>

      <div className="skills-list">
        {skills.map(skill => (
          <Pill
            key={skill}
            className="skill-pill"
            maw="100%"
            withRemoveButton
            onRemove={() => dispatch(removeSkill(skill))}
          >
            {skill}
          </Pill>
        ))}
      </div>
    </div>
  );
}
