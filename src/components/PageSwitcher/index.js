import { Link } from "react-router-dom";
import { StyledToggleButton, StyledToggleButtonGroup } from "./style";

export default function PageSwitcher({ type }) {
  return (
    <StyledToggleButtonGroup value={type} exclusive size="small">
      <StyledToggleButton value="docser">
        <Link to="/dashboard">Document Search</Link>
      </StyledToggleButton>
      <StyledToggleButton value="toc">
        <Link to="/toc">Table of Content</Link>
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}
