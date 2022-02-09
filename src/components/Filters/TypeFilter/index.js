import React, { useState } from "react";
import { Grid, Box, FormGroup, Checkbox, SvgIcon } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import fileIcon from "../../../assets/icon/file.svg";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledFormLabel,
} from "../style";

const styles = {
  height: "27px",
  width: "27px",
  padding: "6px 0px 0px",
  marginBottom: "-10px",
};

function CheckedBox() {
  return (
    <SvgIcon style={styles}>
      <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" fill="white" stroke="#E8E8E8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.64382 8.26667L4.42209 6.97292C4.10968 6.64225 3.58843 6.62757 3.258 6.93966C2.92733 7.25187 2.91265 7.77288 3.22474 8.10352L5.0554 10.042C5.21106 10.2067 5.42768 10.2999 5.65402 10.2999H5.66094C5.88993 10.298 6.10773 10.2009 6.2622 10.0318L10.7847 5.07848C11.0913 4.74267 11.0675 4.22186 10.7318 3.91527C10.396 3.60886 9.87522 3.63246 9.5686 3.96818"
        fill="#444444"
      />
    </SvgIcon>
  );
}

function UncheckedBox() {
  return (
    <SvgIcon style={styles}>
      <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" fill="white" stroke="#E8E8E8" />
    </SvgIcon>
  );
}

function pushType(value, name, array) {
  if (value) {
    switch (name) {
      case "pdf":
        array.push("application/pdf");
        break;
      case "docs":
        array.push("application/vnd.google-apps.document");
        array.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        break;
      case "sheets":
        array.push("application/vnd.google-apps.spreadsheet");
        array.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        break;
      case "slides":
        array.push("application/vnd.google-apps.presentation");
        array.push("application/vnd.openxmlformats-officedocument.presentationml.presentation");
        break;
      default:
        break;
    }
  }
  return array;
}

export default function TypeFilter({ handleFilterValue }) {
  const [types, setTypes] = useState({
    pdf: false,
    docs: false,
    sheets: false,
    slides: false,
  });

  const typeCollection = [
    {
      name: "pdf",
      label: "PDFs",
    },
    {
      name: "docs",
      label: "Docs",
    },
    {
      name: "sheets",
      label: "Sheets",
    },
    {
      name: "slides",
      label: "Slides",
    },
  ];

  const handleChange = (event) => {
    setTypes({ ...types, [event.target.name]: event.target.checked });
    let typeFilters = [];
    Object.entries(types).forEach(([key, value]) => {
      if (key !== event.target.name) {
        typeFilters = pushType(value, key, typeFilters);
      }
    });
    typeFilters = pushType(event.target.checked, event.target.name, typeFilters);
    handleFilterValue("type", typeFilters);
  };

  return (
    <Box margin="5px 20px">
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img src={fileIcon} alt="File Icon" />
            </Grid>
            <Grid item xs={1}>
              Type
            </Grid>
          </Grid>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <FormGroup>
            {typeCollection.map((type) => (
              <StyledFormLabel
                control={
                  <Checkbox
                    name={type.name}
                    onChange={handleChange}
                    color="default"
                    disableRipple
                    size="small"
                    icon={<UncheckedBox />}
                    checkedIcon={<CheckedBox />}
                    style={{ backgroundColor: "transparent" }}
                  />
                }
                label={type.label}
              />
            ))}
          </FormGroup>
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
