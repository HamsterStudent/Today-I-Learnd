//App.js

import styled, {keyframes} from "styled-components";

//Theme : 모든 색을 가지고 있는 오브젝트

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Hamster = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;


function App() {
  return (
  <Hamster>
    <Title>Hello</Title>
  </Hamster>
  );
}

export default App;


//index.js

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
