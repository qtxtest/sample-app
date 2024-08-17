import React from "react";
import { Radio, Button, Select, DatePicker } from "antd";
import {
  ConfirmationContainer,
  Container,
  FullWidthRow,
  SelectOption,
} from "./styles";

/**
 * Layout design:
 *  Container: vertical, spacing=8px, w=200px
 *   - Row1: Radio.Group
 *   - Row2: Input or Select + DatePicker
 *   - Row3: Buttons <Reset + Search>
*/
const App = () => {
  return (
    <Container direction="vertical" size={8}>
      <FullWidthRow>
        <Radio.Group>
          <Radio value={1}>Text</Radio>
          <Radio value={2}>Date</Radio>
        </Radio.Group>
      </FullWidthRow>

      {/* <FullWidthRow>
        <Input placeholder="Input" />
      </FullWidthRow> */}

      <FullWidthRow>
        <Select showSearch defaultValue="before">
          <SelectOption value="before">before</SelectOption>
          <SelectOption value="after">after</SelectOption>
        </Select>
      </FullWidthRow>

      <FullWidthRow>
        <DatePicker />
      </FullWidthRow>

      <FullWidthRow>
        <ConfirmationContainer>
          <Button>Reset</Button>
          <Button type="primary">Search</Button>
        </ConfirmationContainer>
      </FullWidthRow>
    </Container>
  );
};

export default App;
