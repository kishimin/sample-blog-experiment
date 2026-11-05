import {
  Autocomplete,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

const PACETYPE = {
  NOT: "未設定",
  NONBIRI: "のんびり",
  MYPACE: "マイペース",
} as const;

type PaceType = (typeof PACETYPE)[keyof typeof PACETYPE];

export const AutocompleteForm = () => {
  const [type, setType] = useState<PaceType | null>(null);

  return (
    <FormControl>
      <FormLabel htmlFor={"autocomplete"}>{"のんびり"}</FormLabel>

      <Autocomplete
        id={"autocomplete"}
        options={[PACETYPE.NOT, PACETYPE.NONBIRI, PACETYPE.MYPACE]}
        value={type}
        onChange={(_, value) => setType(value)}
        renderInput={(params) => (
          <OutlinedInput
            {...params.slotProps.input}
            id={params.id}
            inputProps={{
              ...params.slotProps.htmlInput,
              "aria-describedby": "autocomplete-description",
            }}
          />
        )}
      />

      <FormHelperText id={"autocomplete-description"}>{"のんびり"}</FormHelperText>
    </FormControl>
  );
};
