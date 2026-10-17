import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const CheckboxForm = () => {
  const [isNonbiri, setIsNonbiri] = useState<boolean>(false);

  return (
    <FormControl>
      <FormControlLabel
        label={"のんびり"}
        control={
          <Checkbox
            checked={isNonbiri}
            onChange={(_, checked) => setIsNonbiri(checked)}
            slotProps={{ input: { "aria-describedby": "check-description" } }}
          />
        }
      />

      <FormHelperText id={"check-description"}>{"のんびり"}</FormHelperText>
    </FormControl>
  );
};
