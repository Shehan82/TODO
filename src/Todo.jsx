import React from 'react';
import { Button, Card, CardContent, Input, InputLabel, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';



function Todo(props) {
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                <ListItemIcon>
          
                </ListItemIcon>
                <ListItemText primary={props.details} secondary="helo" />
                </ListItem>
            </List>
     
            {/* <h1>{props.details}</h1>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>     */}
        
   
        </div>
    )
}

export default Todo;
