
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import List from "./components/List";
import Search from "./components/Search";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1c1c1e",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

const Main = styled.div`
  padding: 8px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  cursor: pointer;
`;

function App() {
  const [showSearch, setShowSearch] = useState(true);

  const toggleView = () => {
    setShowSearch(!showSearch);
  };

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <ToggleButton onClick={toggleView}>
          {showSearch ? 'Show List' : 'Show Search'}
        </ToggleButton>
        {showSearch ? <Search /> : <List />}
      </Main>
    </ThemeProvider>
  );
}

export default App;
