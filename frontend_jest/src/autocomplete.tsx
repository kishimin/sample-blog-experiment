import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { PACETYPE, type PaceType } from "./select-field";

export const AutocompleteForm = () => {
  const [type, setType] = useState<PaceType | null>(PACETYPE.NOT);

  return (
    <Autocomplete
      options={[PACETYPE.NOT, PACETYPE.NONBIRI, PACETYPE.MYPACE]}
      value={type}
      onChange={(_, value) => setType(value)}
      renderInput={(params) => (
        <TextField {...params} label={"のんびり"} helperText={"のんびり"} />
      )}
    />
  );
};
