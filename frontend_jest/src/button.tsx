import { Button } from "@mui/material";
import { useState } from "react";

export const ButtonExample = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setClicked(true)}>{"のんびり"}</Button>
      {clicked && <p>{"のんびりしました"}</p>}
    </>
  );
};
