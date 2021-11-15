/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import folderIcon from "../../../assets/icon/folders.svg";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledTextField,
} from "../style";
import getDropdownResult from "../../../utils/getDropdownResult";
import useDebounce from "../../../utils/useDebounce";

export default function DocLocationFilter({ handleFilterValue }) {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (data) => {
    if (data.length === 0) {
      handleFilterValue("locations", []);
    } else {
      const locations = data.map((item) => item.name);
      handleFilterValue("locations", locations);
    }
  };

  const debounceValue = useDebounce(inputValue, 500);

  useEffect(() => {
    getDropdownResult(debounceValue, "file_locations")
      .then((body) => {
        setResult(body.data);
      })
      .catch(() => {
        setResult([]);
      });
  }, [debounceValue]);

  return (
    <Box margin="5px 20px">
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img src={folderIcon} alt="Folder Icon" />
            </Grid>
            <Grid item xs={10} data-testid="label">
              Document Location
            </Grid>
          </Grid>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Autocomplete
            data-testid="autocomplete"
            multiple
            value={value}
            size="small"
            onChange={(event, newValue) => {
              setValue(newValue);
              handleChange(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            limitTags={1}
            options={result}
            getOptionLabel={(option) => `${option.name}`}
            filterOptions={(option, state) => option}
            renderInput={(params) => (
              <StyledTextField
                data-testid="textField"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                variant="outlined"
                placeholder="Search here..."
              />
            )}
          />
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
