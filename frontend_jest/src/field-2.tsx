import { FormControl, FormHelperText, FormLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

export const SampleForm = () => {
  const [text, setText] = useState<string>("");

  return (
    <FormControl component={"form"}>
      <FormControl>
        <FormLabel htmlFor={"text"}>{"のんびり"}</FormLabel>

        <OutlinedInput
          id={"text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-describedby={"text-description"}
        />

        <FormHelperText id={"text-description"}>{"のんびり"}</FormHelperText>
      </FormControl>
    </FormControl>
  );
};
