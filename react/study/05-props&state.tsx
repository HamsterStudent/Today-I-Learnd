// Circle.tsx
import { useState } from "react";
import styled from "styled-components";

interface ContainerProps{
    bgColor: string;
    borderColor: string;
}

interface CircleProps{
    bgColor: string; // required 필수
    borderColor?: string; // optional 선택
    text?: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px; 
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 3px dotted ${props => props.borderColor};
`;


function Circle({bgColor, borderColor, text = 'Hamster'} : CircleProps){
    const [counter, setCounter] = useState<number | string>();
    // 옆에 타입을 명시해주면 숫자를 string으로 바꿔도 에러가 나지 않음. 일반적으로 같은 타입으로면 변화하는 편...
    
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>;
}

export default Circle;


// interface는 데이터 타입을 나타낸다.
// interface PlayerShape{
//     name: string;
//     age: number;
// }

// const sayHello = (playerObj: PlayerShape) =>
//     `Hello ${playerObj.name} you are ${playerObj.age}`;

// sayHello({name:"nico", age:12})
// sayHello({name:"hi", age:12, hello: 1}) // 이 경우엔 hello가 없다고 지적해준다.



// App.tsx
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle borderColor='white' bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  )
};

export default App;
