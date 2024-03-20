import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "./constants";
const drawerWidth = DRAWER_WIDTH;

const mainStyles = {
  flexGrow: 1,
  height: "calc(100vh - 64px)",
  padding: "0.3px",
  transition: "margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  marginLeft: `-${drawerWidth}px`,
  lineHeight: "0 !important",
};

const containerStyles = {
  width: "95%",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const btnsStyles = {
  width: "100%",
  margin: "2rem 0rem",
};

const btnStyles = {
  width: "50%",
};

const chevronLeft = {
  width: "100em",
  marginLeft: "300px",
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ open }) => ({
    ...mainStyles,
    ...(open && {
      transition: "margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      marginLeft: 0,
    }),
  })
);

export { Main, containerStyles, btnsStyles, btnStyles, chevronLeft };


