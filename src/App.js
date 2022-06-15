import React from 'react'
import {SunIcon} from '@chakra-ui/icons'
import {
  ChakraProvider,
  theme,
  Heading,
  VStack,
  IconButton
} from "@chakra-ui/react";

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import {useState} from 'react'
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const initialtodos = [
    {
        id: 1,
        body: 'get bread',
    },
    {
        id: 2,
        body: 'get butter',
    },
  ];

  const [todos, setTodos] = useState(initialtodos);

  function delTodos(id) {
    const newtodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newtodos);
  }

  function addTodos(todo) {
    setTodos([todos, todo]);
  }

  return (
    <ChakraProvider theme={theme}>
      <VStack>
          <IconButton 
            icon={<SunIcon />} 
            size='lg'
            isRound='true' 
            alignSelf='flex-end'/>
            
          <Heading
            mb='8'
            size='4xl'
            fontWeight='extrabold'
            bgGradient='linear(to-r, pink.500, pink.500, blue.300)'
            bgClip='text'>
            WHAT Todos
          </Heading>
          <TodoList todos={todos} deleteTodo={delTodos}/>
          <AddTodo addTodo={addTodos}/>
      </VStack>
    </ChakraProvider>
  );
}

export default App;