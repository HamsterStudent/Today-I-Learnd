import { Container } from "react-dom";
import styled from "styled-components";

interface ContainerProps{
    bgColor: string;
}

const Container = styled.div<ContainerProps>``;

interface CircleProp {
    bgColor: string;
}

// const x = (a:number, b:number) => a+b

function Circle({bgColor}: CircleProp){
    return <Container />;
}

export default Circle;