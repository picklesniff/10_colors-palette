import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import mediaQuery from "./mediaQuery";
import { DRAWER_WIDTH } from "./constants";
const drawerWidth = DRAWER_WIDTH;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const NavBtns = styled("div")(({ theme }) => ({
  margin: "43px",
  [mediaQuery.down("md")]: {
    margin: theme.spacing(5),
  },
}));

export const Btn = styled(Button)(({ theme }) => ({
  margin: "0 0.3rem",
  [mediaQuery.down("md")]: {
    padding: theme.spacing(0.55),
    paddingTop: "0.4rem",
    fontSize: "0.6rem",
  },
}));
