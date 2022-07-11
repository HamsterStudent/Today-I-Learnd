import styled from "styled-components";

const Hamster = styled.div`
  display : flex;
`;

const Box = styled.div`
  background-color : ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)` //Box의 모든 속성을 가져온 후 아래 항목들을 추가해라.
  border-radius: 50px;
`

function App() {
  return (
  <Hamster>
    <Box bgColor = "teal" />
    <Circle bgColor = "pink" />
  </Hamster>
  );
}

export default App;
