import React, { useState, useRef, createContext } from 'react';
import Head from 'next/head';
import { Button, Heading, Input } from '@chakra-ui/core';

import { CenteredBoxForm } from '../components/CenteredBoxForm';

import ToDoItems from './todoitems';
import CountItems from './countitems';

export const TodoItemsContext = createContext({ items: [], deleteItem: () => null });

function ToDoList() {
  const [items, setItems] = useState([]);
  const _inputElement = useRef(null);

  const addItem = (e) => {
    if (_inputElement.current.value !== '') {
      const newItem = {
        text: _inputElement.current.value,
        key: Date.now(),
      };

      const newItemsArray = items.concat(newItem);

      setItems(newItemsArray);

      console.log('added item: ' + newItem.key);
      _inputElement.current.value = '';
    }

    e.preventDefault();
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => {
      console.log('deleted item: ' + item.key);

      return item.key !== key;
    });

    setItems(filteredItems);
  };

  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>

      <TodoItemsContext.Provider value={{ items: items, deleteItem: deleteItem }}>
        <CenteredBoxForm>
          <form onSubmit={addItem}>
            <Heading as="h4" size="md" display="flex" justifyContent="space-between">
              To Do List
              <CountItems />
            </Heading>
            <Input
              m="5"
              p="5"
              fontSize="20px"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="#7C77B9"
              borderRadius="7px"
              width="210px"
              ref={_inputElement}
              placeholder="Enter Task"
            />
            <Button
              marginTop="2"
              marginBottom="3"
              p="5"
              fontSize="20px"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="#FFF"
              borderRadius="7px"
              bgColor="#7C77B9"
              color="#FFF"
              type="submit"
            >
              Add
            </Button>
          </form>
          <ToDoItems />
        </CenteredBoxForm>
      </TodoItemsContext.Provider>
    </>
  );
}

export default ToDoList;
