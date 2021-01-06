import React from 'react';
import {
  Button,
  TextField,
  Grid
} from '@material-ui/core';
const Form = (props) => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={9} md={5}>
        <TextField inputRef={props.inputRef} placeholder="new todo" fullWidth />
      </Grid>
      <Grid item xs={2} md={1}>
        <Button variant="contained" color="primary" onClick={props.onAddClick}>Add</Button>
      </Grid>
    </Grid>
  )
}

export default Form;