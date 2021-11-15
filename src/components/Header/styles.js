import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Username = styled.strong`
  font-weight: 500;
  font-size: 14px;
  margin-right: 5px;
`;

export const PictureProfile = styled.img`
  height: 30px;
  border-radius: 50%;
`;

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    zIndex: 1300,
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));
