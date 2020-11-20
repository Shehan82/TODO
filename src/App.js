import './App.css';
import React, { useState } from 'react';


function App() {

  const [todos, setTodos] = useState(["hello", "hi", "how", "much"]);
  const [input, setInput] = useState("")

  const chng = (event) => {
    setInput(event.target.value);
  }

  const addTodo = ()=>{
    setTodos([...todos, input]);
  };
  return (
    
    <div className="App">
      <h1>This is a todo app</h1>
      <input type="text" onChange={chng}/>
      <button onClick={addTodo}>add todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
