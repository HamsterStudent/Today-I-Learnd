import styled, {keyframes} from "styled-components";

const Hamster = styled.div`
  display: flex;
`;

const rotationAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 48px;
`

//Box안에 있는 자식 컴포넌트를 선택할 수 있음
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAni} 5s linear infinite;
  //이런 식으로~ 진짜최고네
  ${Emoji} {
    font-size: 36px;
    // &를 써서 span:hover효과를 만들기
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
  
`;

function App() {
  return (
  <Hamster>
    <Box>
      <Emoji as="p">😪</Emoji>
    </Box>
    <Emoji as="p">🙄</Emoji>
  </Hamster>
  );
}

export default App;
