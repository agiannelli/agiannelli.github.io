import React, { useState, useRef } from 'react';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import ProjectInfo from '../ProjectInfo';

const ToDo = () => {
  const textFieldRef = useRef(null);
  const [todos, setTodos] = useState(['todo1', 'todo2']);

  // add new todo to state and clear the input
  const handleAddClick = () => {
    const newTodo = textFieldRef.current.value;
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      textFieldRef.current.value = '';
    }
  };

  // update state with deleted todo filtered out
  const handleDeleteClick = (index) => {
    setTodos(oldTodos => oldTodos.filter((e, i) => i !== index));
  }

  return (
    <>

      <div>
        <Grid container justify="center">
          <Grid item xs={6} md={2}>
            <Typography variant="h3" gutterBottom>Todo List</Typography>
          </Grid>
        </Grid>
        <Form inputRef={textFieldRef} onAddClick={handleAddClick} />
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <List>
              {todos.map((todo, index) => (
                
              ))}
            </List>
          </Grid>
        </Grid>
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