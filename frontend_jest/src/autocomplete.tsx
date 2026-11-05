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
  const [type, setType] = useState<PaceType | null>(PACETYPE.NOT);

  return (
    <Autocomplete
      options={[PACETYPE.NOT, PACETYPE.NONBIRI, PACETYPE.MYPACE]}
      value={type}
      onChange={(_, value) => setType(value)}
      renderInput={(params) => (
        <FormControl fullWidth={params.fullWidth} disabled={params.disabled}>
          <FormLabel htmlFor={params.id}>{"のんびり"}</FormLabel>

          <OutlinedInput
            {...params.slotProps.input}
            id={params.id}
            inputProps={{
              ...params.slotProps.htmlInput,
              "aria-describedby": `${params.id}-description`,
            }}
          />

          <FormHelperText id={`${params.id}-description`}>
            {"のんびり"}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
