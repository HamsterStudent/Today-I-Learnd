// // import Button from "./Button";
// // import styles from "./App.module.css";
// import {useState, useEffect} from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("I run all the time");
//   // const iRunOnlyOnce = () => {
//   //   console.log("I run only once");
//   // };
//   useEffect(()=>{  //딱 한번만 실행될 수 있게 해줌. 맨날랜더링하지않구....
//     console.log("I run only once.");
//   }, []);
//   useEffect(()=>{
//     console.log("I run when 'keyword' changes");
//   }, [keyword]); //keyword가 변화했을 때만 실행하라고 알리는... 값이 변화했을 때 실행시키고 싶은 부분을 []안에 적으면 됨
//   useEffect(()=>{
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(()=>{
//     console.log("I run when 'counter' & 'keyword' changes");
//   }, [counter, keyword]);
//   return (
//     <div>
//       {/* <h2 className={styles.title}>Welcome back React!!!</h2>
//       <Button text={"Click me"}/> */}
      
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function Hello(){

  // useEffect(()=>{
  //   console.log("hi :)");
  //   return() => console.log("bye :(");
  // });
  useEffect(()=>{
    console.log("hi :)");
    return function(){
      console.log("bye")
    }
  }, []);
  return <h1>Hello</h1>;
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick = {onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  );
};

export default App;
