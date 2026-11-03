import { TextField } from "@mui/material";
import { useState } from "react";

export const TextFieldForm = () => {
  const [text, setText] = useState<string>("");

  return (
    <TextField
      label={"のんびり"}
      onChange={(e) => setText(e.target.value)}
      value={text}
      helperText={"のんびり"}
    />
  );
};
