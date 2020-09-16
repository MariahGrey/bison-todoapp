import React, { useContext } from 'react';
import { Box, CloseButton, List, ListItem } from '@chakra-ui/core';

import { TodoItemsContext } from './todolist';

function ToDoItems() {
  const { items: entries, deleteItem: deleteTask } = useContext(TodoItemsContext);

  const Task = ({ item }) => {
    return (
      <>
        <Box key={item.key}>
          <ListItem>
            <CloseButton size="lg" onClick={() => deleteTask(item.key)}>
              {item.text}
            </CloseButton>
          </ListItem>
        </Box>
      </>
    );
  };

  const listItems = entries.map((item) => <Task key={item.key} item={item} />);

  return (
    <>
      <Box display="flex" justifyContent="center" textAlign="center">
        <List>{listItems}</List>
      </Box>
    </>
  );
}

export default ToDoItems;
