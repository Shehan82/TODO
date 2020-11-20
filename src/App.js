import './App.css';
import React, { useState } from 'react';


function App() {
  const [todo, setTodo] = useState("nothing");
  const addTodo = () => {
   
    let x = document.getElementById("inpt").value;
    setTodo(x);
    let k =  <h2>{todo}</h2>;
    let div = document.getElementById("apnd");
    div.appendChild(k);
    
  };

 

  return (
    <div className="App">
     <h1>TODO Application</h1>
     <input id="inpt" type="text"/>
     <button onClick={addTodo}>Add todo</button>
     <div id="apnd"></div>
    </div>
  );
}

export default App;
