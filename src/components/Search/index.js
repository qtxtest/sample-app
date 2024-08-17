import React, { useState } from "react";
import { Container, FullWidthRow, RadioContainer } from "./styles";
import RadioGroup from "./RadioGroup";
import ConfirmationButtons from "./ConfirmationButtons";
import InputText from "./InputText";
import InputDate from "./InputDate";

/**
 * Layout design:
 *  Container: vertical, spacing=8px, w=200px
 *   - Row1: Radio.Group
 *   - Row2: Input or Select + DatePicker
 *   - Row3: Buttons <Reset + Search>
 */
const Search = () => {
  const [selectedRadio, setSelectedRadio] = useState(2);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Container direction="vertical" size={8}>
      <RadioContainer>
        <RadioGroup
          selectedRadio={selectedRadio}
          handleRadioChange={handleRadioChange}
        />
      </RadioContainer>

      {selectedRadio === 1 ? <InputText /> : <InputDate />}

      <FullWidthRow>
        <ConfirmationButtons />
      </FullWidthRow>
    </Container>
  );
};

export default Search;
