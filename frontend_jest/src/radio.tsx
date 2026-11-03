import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const SampleForm = () => {
  const [choice, setChoice] = useState("");

  return (
    <FormControl component="form">
      <FormLabel id="activity-label">過ごし方</FormLabel>
      <RadioGroup
        aria-labelledby="activity-label"
        name="activity"
        value={choice}
        onChange={(event) => setChoice(event.target.value)}
      >
        <FormControlLabel value="relaxed" control={<Radio />} label="のんびり" />
        <FormControlLabel value="active" control={<Radio />} label="アクティブ" />
      </RadioGroup>
    </FormControl>
  );
};
