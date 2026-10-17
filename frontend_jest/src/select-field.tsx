import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

export const PACETYPE = {
  NOT: "未設定",
  NONBIRI: "のんびり",
  MYPACE: "マイペース",
} as const;

export type PaceType = (typeof PACETYPE)[keyof typeof PACETYPE];

export const SelectForm = () => {
  const [type, setType] = useState<PaceType>(PACETYPE.NOT);

  return (
    <FormControl>
      <FormLabel id={"select"}>{"のんびり"}</FormLabel>

      <Select
        labelId={"select"}
        value={type}
        onChange={(e) => setType(e.target.value)}
        aria-describedby={"select-description"}
      >
        <MenuItem value={PACETYPE.NOT}>{PACETYPE.NOT}</MenuItem>
        <MenuItem value={PACETYPE.NONBIRI}>{PACETYPE.NONBIRI}</MenuItem>
        <MenuItem value={PACETYPE.MYPACE}>{PACETYPE.MYPACE}</MenuItem>
      </Select>

      <FormHelperText id={"select-description"}>{"のんびり"}</FormHelperText>
    </FormControl>
  );
};
