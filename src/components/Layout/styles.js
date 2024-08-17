import { Space, Row, Select } from "antd";
import styled from "styled-components";

export const Container = styled(Space)`
  width: 200px;
`;

export const FullWidthRow = styled(Row)`
  width: 100%;
  & > * {
    width: 100%;
  }
`;

export const ConfirmationContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  button {
    flex: 1;
  }
`;

export const SelectOption = Select.Option;

