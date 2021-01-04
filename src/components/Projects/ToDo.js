import React, { useState, useRef } from 'react';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import ProjectInfo from './ProjectInfo'

const ToDo = () => {
  const textFieldRef = useRef(null);
  const [todos, setTodos] = useState(['todo1', 'todo2']);

  return (
    <>
      <div>
        <List>
          {todos.map((todo, index) => (
            <ListItem>
              <ListItemText>{todo}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        <ProjectInfo
          title="Rapid React - ToDo App"
          url="https://rapid-react-app.firebaseapp.com/#0"
          nextUp="Finishing it!"
        />
      </div>
    </>
  );
}
export default ToDo;