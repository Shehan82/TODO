import './App.css';
import React, { useState } from 'react';


function App() {

  const [todos, setTodos] = useState(["hello", "hi", "how", "much"]);

  const add = () => {
    return todos.map(todo => (
      <li>{todo}</li>
    ))
  }


  return (
    <div className="App">
      <ul>
        {add()}
      </ul>
    </div>
  );
}

export default App;
