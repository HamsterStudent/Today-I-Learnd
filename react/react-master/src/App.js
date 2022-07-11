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
