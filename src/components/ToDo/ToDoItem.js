const ToDoItem = (props) => {

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <List>
          {todos.map((todo, index) => (
            <ListItem>
              <ListItemText>{todo}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleDeleteClick(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
