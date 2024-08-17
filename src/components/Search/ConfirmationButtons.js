import React from "react";
import { Button } from "antd";
import { ConfirmationContainer } from "./styles";

const ConfirmationButtons = () => (
  <ConfirmationContainer>
    <Button>Reset</Button>
    <Button type="primary">Search</Button>
  </ConfirmationContainer>
);

export default ConfirmationButtons;
