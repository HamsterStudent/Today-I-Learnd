import { useState, useEffect } from "react";

function App(){
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => { 
    event.preventDefault(); // submit 이벤트를 막음.
    if(toDo === ""){ // todo가 비어있으면 함수 작동하지 않도록 return
      return;
    }
    setTodo(""); // todo를 빈칸으로 만드는 동작
    // state는 직접적으로 수정 불가능함. ex)toDo ="" 로는 안됨.
    setTodos(currentArray => [toDo, ...currentArray]); // 점 세개를 찍으면 배열 안에 항목을 추가할 수 있게 됨
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."  />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))} 
      </ul>
    </div>
  );
  // map는 자바스크립트 함수. 하나의 array에 있는 item을 내가 원하는 걸로 바꿔주는 역할
}

export default App;