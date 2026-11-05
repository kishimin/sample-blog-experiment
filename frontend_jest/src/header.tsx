import { Box, type BoxProps } from "@mui/material";

export const Header = (props: BoxProps<"header">) => {
  return <Box component={"header"} {...props} />;
};
