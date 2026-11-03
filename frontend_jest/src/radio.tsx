import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const PACETYPE = {
  NOT: "未設定",
  NONBIRI: "のんびり",
  MYPACE: "マイペース",
} as const;

export const RadioForm = () => {
  const [type, setType] = useState<string>(PACETYPE.NOT);

  return (
    <FormControl>
      <FormLabel id={"radio"}>{"のんびり"}</FormLabel>

      <RadioGroup
        aria-labelledby={"radio"}
        aria-describedby={"radio-description"}
        name={"pace"}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <FormControlLabel
          value={PACETYPE.NOT}
          control={<Radio />}
          label={PACETYPE.NOT}
        />
        <FormControlLabel
          value={PACETYPE.NONBIRI}
          control={<Radio />}
          label={PACETYPE.NONBIRI}
        />
        <FormControlLabel
          value={PACETYPE.MYPACE}
          control={<Radio />}
          label={PACETYPE.MYPACE}
        />
      </RadioGroup>

      <FormHelperText id={"radio-description"}>{"のんびり"}</FormHelperText>
    </FormControl>
  );
};
