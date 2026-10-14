import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

export const SampleForm = () => {
  const [text, setText] = useState<string>("");

  return (
    <FormControl component={"form"}>
      <TextField
        label={"のんびり"}
        onChange={(e) => setText(e.target.value)}
        value={text}
        helperText={"のんびり"}
      />
    </FormControl>
  );
};
