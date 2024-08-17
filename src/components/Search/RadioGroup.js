import React from 'react';
import { Radio } from 'antd';

const RadioGroup = ({ selectedRadio, handleRadioChange }) => (
  <Radio.Group onChange={handleRadioChange} value={selectedRadio}>
    <Radio value={1}>Text</Radio>
    <Radio value={2}>Date</Radio>
  </Radio.Group>
);

export default RadioGroup;