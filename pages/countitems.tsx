import React, { useContext } from 'react';
import { Box } from '@chakra-ui/core';

import { TodoItemsContext } from './todolist';

function CountItems() {
  const { items: entries } = useContext(TodoItemsContext);
  const numberOfItems = entries.length;

  return (
    <>
      <Box
        bgColor="rgba(124, 119, 185, 0.1)"
        color="#7C77B9"
        padding="10px"
        fontSize="20px"
        margin="0"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="#7C77B9"
        borderRadius="7px"
        height="50px"
        width="50px"
        textAlign="center"
      >
        {numberOfItems}
      </Box>
    </>
  );
}

export default CountItems;
