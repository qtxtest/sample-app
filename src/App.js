
import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import List from "./components/List";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Search />
        {/* <List /> */}
      </Main>
    </ThemeProvider>
  );
}

export default App;
