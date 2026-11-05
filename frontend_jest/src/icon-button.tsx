import { IconButton } from "@mui/material";
import { useState } from "react";

export const IconButtonExample = () => {
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <IconButton
      aria-label={"お気に入り"}
      aria-pressed={favorite}
      onClick={() => setFavorite(!favorite)}
    >
      <span aria-hidden={true}>{"★"}</span>
    </IconButton>
  );
};
