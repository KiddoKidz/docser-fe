import React from "react";
import { removeRelatedWithAuth } from "../../utils/useAuth";
import { LogoutButtonStyled } from "./styles";

function LogoutButton() {
  return (
    <div>
      <LogoutButtonStyled data-testid="logout-button" onClick={() => removeRelatedWithAuth()}>
        Log Out
      </LogoutButtonStyled>
    </div>
  );
}

export default LogoutButton;
