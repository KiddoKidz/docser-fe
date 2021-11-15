/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import personIcon from "../../../assets/icon/person.svg";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledInput,
} from "../style";
import getDropdownResult from "../../../utils/getDropdownResult";
import useDebounce from "../../../utils/useDebounce";

export default function OwnerFilter({ handleFilterValue }) {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (data) => {
    if (data.length === 0) {
      handleFilterValue("owners", []);
    } else {
      const owners = data.map((item) => item.name);
      handleFilterValue("owners", owners);
    }
  };

  const debounceValue = useDebounce(inputValue, 500);

  useEffect(() => {
    getDropdownResult(debounceValue, "owner")
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
              <img src={personIcon} alt="Person Icon" />
            </Grid>
            <Grid item xs={10}>
              Owner / Shared By
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
            getOptionLabel={(option) => `${option.name} - ${option.email}`}
            filterOptions={(option, state) => option}
            renderInput={(params) => (
              <StyledInput
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                variant="outlined"
                data-testid="textField"
                placeholder="Search for person..."
              />
            )}
          />
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
