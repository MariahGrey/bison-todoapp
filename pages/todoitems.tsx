import React, { useContext } from 'react';
import { Box, Button, List, ListItem, useToast } from '@chakra-ui/core';

import { TodoItemsContext } from './todolist';

function ToDoItems() {
  const { items: entries, deleteItem } = useContext(TodoItemsContext);

  const toast = useToast();

  const Task = ({ item }) => {
    return (
      <>
        <Box key={item.key}>
          <ListItem>
            <Button
              size="lg"
              marginTop="2"
              marginBottom="3"
              p="5"
              fontSize="20px"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="#FFF"
              borderRadius="7px"
              bgColor="rgba(124, 119, 185, 0.1)"
              color="#7C77B9"
              onClick={() => {
                deleteItem(item.key);
                toast({
                  title: 'Task Deleted!',
                  description: 'Great job completing that task!',
                  duration: 4000,
                  isClosable: true,
                  position: 'bottom-left',
                });
              }}
            >
              {item.text}
            </Button>
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
