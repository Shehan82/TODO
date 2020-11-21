import './App.css';
import React, { useState, useStyles, useEffect } from 'react';
import { Button, Card, CardContent, Input, InputLabel, Switch, TextField } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    // if(order === "desc")
    // {
      db.collection('todos').orderBy('timestamp', order).onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data().todo))
      })
    // }
    // if(order === "asc")
    // {
    //   db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot => {
    //     setTodos(snapshot.docs.map(doc => doc.data().todo))
    //   })
    // }
   

  }, [order]) //when this array is in the blank code in the brackets
        // runs ones. and if there is any variable in the array code in the
      // run once at the app load and when the changing happen this variable
      
 

  const chng = (event) => {
    setInput(event.target.value);
  }

  const addTodo = (event)=>{
    event.preventDefault();

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTodos([...todos, input]);
    setInput("");
    
  };

  const chk = () => {
    if(order==="desc")
    {
      setOrder("asc");
    }
    else
    {
      setOrder("desc");
    }
  }
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
        <Switch
            // checked={()=>{setOrder("asc")}}
            onChange={chk}
            // name="checkedB"
            color="primary"
          />
       
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
