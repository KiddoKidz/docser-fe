import {
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  SwipeableDrawer,
  withStyles,
} from "@material-ui/core";

export const StyledDrawer = withStyles({
  root: {
    position: "relative",
    zIndex: 0,
  },
  paper: {
    backgroundColor: "#F4F7FA",
    border: "none",
  },
})(SwipeableDrawer);

export const StyledInput = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    width: "242px",
    minHeight: "40px",
    borderRadius: 3,
    fontSize: 14,
  },
})(TextField);

export const StyledTextField = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    width: "242px",
    minHeight: "40px",
    borderRadius: 3,
    fontSize: "15px",
  },
})(TextField);

export const StyledAccordion = withStyles({
  root: {
    boxShadow: "none",
    width: "275px",
    backgroundColor: "transparent",
  },
})(Accordion);

export const StyledAccordionSummary = withStyles({
  root: {
    minHeight: "0",
    height: "48px",
    "&$expanded": {
      minHeight: "0",
      height: "48px",
    },
  },
  expanded: {},
})(AccordionSummary);

export const StyledAccordionDetails = withStyles({
  root: {
    padding: "0 12px",
    marginBottom: "10px",
  },
})(AccordionDetails);

export const StyledFormLabel = withStyles({
  label: {
    fontSize: 16,
    fontFamily: "Metropolis",
  },
})(FormControlLabel);
