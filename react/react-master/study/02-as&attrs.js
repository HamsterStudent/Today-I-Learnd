import styled from "styled-components";

const Hamster = styled.div`
  display : flex;
`;

const Btn = styled.button`
  color: pink;
  background-color: azure;
  border: 0;
  border-radius: 15px;
`;

//attrs를 사용하면 해당 항목의 속성 지정 가능(자주쓰이지는 않음)
const Input = styled.input.attrs({required: true, minlength : 10 })`
  background-color: pink;
`;

// as를 사용하면 button태그를 a로 변환 가능
function App() {
  return (
  <Hamster as="header">
    {/* <Btn>Hamster is Best</Btn>
    <Btn as="a" href="/">Hamster is Best</Btn>  */}
    <Input />
    <Input />
    <Input />
    <Input />
  </Hamster>
  );
}

export default App;
