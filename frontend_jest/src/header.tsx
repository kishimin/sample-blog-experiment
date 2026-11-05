import { AppBar, Link, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar component={"header"} position={"static"}>
      <Toolbar>
        <Link href={"/"} color={"inherit"}>{"のんびり"}</Link>
      </Toolbar>
    </AppBar>
  );
};
