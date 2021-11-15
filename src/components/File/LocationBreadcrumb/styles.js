import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";

export const ThreeDot = styled.div`
  cursor: default;
  align-items: center;
  justify-content: center;
`;

export const useStyles = makeStyles(() => ({
  breadcrumbs: {
    display: "flex",
    alignItems: "center",
  },
  location: {
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
  },
  locationUnknown: {
    fontSize: "12px",
    fontWeight: "500",
  },
  img: {
    marginRight: "7px",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  heading: {
    display: "flex",
    alignItems: "center",
  },
  popup: {
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
  },
}));

export const LightTooltip = withStyles((theme) => ({
  tooltipPlacementBottom: {
    margin: "0",
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[3],
    fontSize: 12,
  },
}))(Tooltip);
