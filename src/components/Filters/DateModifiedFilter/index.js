import React, { useState } from "react";
import {
  Grid,
  Box,
  Radio,
  RadioGroup,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clockIcon from "../../../assets/icon/clock.svg";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledFormLabel,
} from "../style";
import { StyledDateInput } from "./style";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C9AEA",
      borderColor: "#E8E8E8",
    },
  },
});

const useStyles = makeStyles({
  icon: {
    borderRadius: "50%",
    width: 15,
    height: 15,
    border: "2.5px solid #E8E8E8",
    backgroundColor: "#FFFFFF",
    "input:hover ~ &": {
      backgroundColor: "#FFFFFF",
    },
  },
});

const EPOCH = 0;
const DAY = 86400000;
const WEEK = 604800000;
const MONTH = 2592000000;
const YEAR = 31556952000;

export default function DateModifiedFilter({ handleFilterValue }) {
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(0);
  const [value, setValue] = useState("0");

  const handleChange = (event) => {
    const now = new Date().getTime();
    setValue(event.target.value);
    switch (event.target.value) {
      case "1":
        handleFilterValue("date", { from: now - DAY, to: now });
        break;
      case "2":
        handleFilterValue("date", { from: now - WEEK, to: now });
        break;
      case "3":
        handleFilterValue("date", { from: now - MONTH, to: now });
        break;
      case "4":
        handleFilterValue("date", { from: now - YEAR, to: now });
        break;
      case "5":
        handleFilterValue("date", {
          from: new Date(fromDate).getTime(),
          to: new Date(toDate).getTime(),
        });
        break;
      default:
        handleFilterValue("date", { from: EPOCH, to: now });
        break;
    }
  };

  const handleFromInput = (date) => {
    setFromDate(date);
    handleFilterValue("date", {
      from: new Date(date).getTime(),
      to: new Date(toDate).getTime(),
    });
  };

  const handleToInput = (date) => {
    setToDate(date);
    handleFilterValue("date", {
      from: new Date(fromDate).getTime(),
      to: new Date(date).getTime(),
    });
  };

  const classes = useStyles();
  const styledRadio = (
    <Radio
      disableRipple
      size="small"
      color="primary"
      icon={<span className={classes.icon} />}
      style={{ backgroundColor: "transparent" }}
    />
  );

  return (
    <MuiThemeProvider theme={theme}>
      <Box margin="5px 20px">
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <img src={clockIcon} alt="Clock Icon" />
              </Grid>
              <Grid item xs={10}>
                Date Modified
              </Grid>
            </Grid>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Grid container>
              <Grid item>
                <RadioGroup value={value} onChange={handleChange}>
                  <StyledFormLabel
                    value="0"
                    control={styledRadio}
                    label="Any date"
                  />
                  <StyledFormLabel
                    value="1"
                    control={styledRadio}
                    label="Last 24 hours"
                  />
                  <StyledFormLabel
                    value="2"
                    control={styledRadio}
                    label="Last week"
                  />
                  <StyledFormLabel
                    value="3"
                    control={styledRadio}
                    label="Last month"
                  />
                  <StyledFormLabel
                    value="4"
                    control={styledRadio}
                    label="Last year"
                  />
                  <StyledFormLabel
                    value="5"
                    control={styledRadio}
                    label="Custom"
                  />
                </RadioGroup>
              </Grid>
              <Box margin="3px 28px 0px">
                <div style={{ fontSize: "14px" }}>From</div>
                <DatePicker
                  selected={fromDate}
                  value={fromDate}
                  maxDate={toDate}
                  onChange={handleFromInput}
                  customInput={<StyledDateInput />}
                  placeholderText="Search for start date..."
                  showYearDropdown
                  aria-label="fromDateInput"
                  disabled={value !== "5"}
                />
                <div style={{ fontSize: "14px", marginTop: "10px" }}>To</div>
                <DatePicker
                  selected={toDate}
                  value={toDate}
                  minDate={fromDate}
                  onChange={handleToInput}
                  customInput={<StyledDateInput />}
                  placeholderText="Search for end date..."
                  showYearDropdown
                  aria-label="toDateInput"
                  disabled={value !== "5"}
                />
              </Box>
            </Grid>
          </StyledAccordionDetails>
        </StyledAccordion>
      </Box>
    </MuiThemeProvider>
  );
}
