import React from "react";
import { Select, DatePicker } from "antd";
import { Container, FullWidthRow, SelectOption } from "./styles";

const InputDate = () => (
  <Container direction="vertical" size={8}>
    <FullWidthRow>
      <Select showSearch defaultValue="before">
        <SelectOption value="before">before</SelectOption>
        <SelectOption value="after">after</SelectOption>
      </Select>
    </FullWidthRow>
    <FullWidthRow>
      <DatePicker />
    </FullWidthRow>
  </Container>
);

export default InputDate;
