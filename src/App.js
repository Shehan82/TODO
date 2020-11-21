import './App.css';
import React, { useState, useStyles, useEffect } from 'react';
import { Button, Card, CardContent, Input, InputLabel, TextField } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })

  }, []) //when this array is in the blank code in the brackets
        // runs ones. and if there is any variable in the array code in the
      // run once at the app load and when the changing happen this variable
      
 

  const chng = (event) => {
    setInput(event.target.value);
  }

  const addTodo = (event)=>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
    
  };
  return (
    
    <div className="App">
      <Card className="app__header">
        <CardContent>
        <h1>TODO</h1>
        </CardContent>
      </Card>
      

      <Card className="app__header">
        <CardContent>
        <form>

        <TextField  value={input} onChange={chng} id="standard-basic" label="Enter your todo here" />  &nbsp;
        {/* <Input type="text" value={input} onChange={chng} placeholder="Enter your todo here!"/> &nbsp; */}
        <Button disabled={!input} size="large" variant="outlined"  color="primary" type="submit" onClick={addTodo}>add todo</Button>
       
      </form>
        </CardContent>
      </Card>
      
      <Card className="app__todoList">
        <CardContent>
        <ul>
        {todos.map(todo => (
          <Todo details={todo}/>
          
        ))}
      </ul>
        </CardContent>
      </Card>
     
    </div>
  );
}

export default App;
