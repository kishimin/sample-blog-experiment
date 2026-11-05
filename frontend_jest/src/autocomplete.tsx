import {
  Autocomplete,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import { useId, useState } from "react";

const PACETYPE = {
  NOT: "未設定",
  NONBIRI: "のんびり",
  MYPACE: "マイペース",
} as const;

type PaceType = (typeof PACETYPE)[keyof typeof PACETYPE];

export const AutocompleteForm = () => {
  const [type, setType] = useState<PaceType | null>(PACETYPE.NOT);
  const id = useId();

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{"のんびり"}</FormLabel>

      <Autocomplete
        id={id}
        options={[PACETYPE.NOT, PACETYPE.NONBIRI, PACETYPE.MYPACE]}
        value={type}
        onChange={(_, value) => setType(value)}
        renderInput={(params) => (
          <OutlinedInput
            {...params.slotProps.input}
            id={params.id}
            inputProps={{
              ...params.slotProps.htmlInput,
              "aria-describedby": `${id}-description`,
            }}
          />
        )}
      />

      <FormHelperText id={`${id}-description`}>{"のんびり"}</FormHelperText>
    </FormControl>
  );
};
