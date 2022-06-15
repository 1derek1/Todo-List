import React from 'react';
import {
    HStack, 
    VStack, 
    Text, 
    IconButton, 
    StackDivider, 
    Spacer,
    Badge
} from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons'

function TodoList({todos, deleteTodo}) {
    
if (!todos.length) {
    return (
        <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No Todos, Woohoo!!!
        </Badge>
    )
}

    return (
        <VStack
            divider={<StackDivider />}
            borderColor = 'gray.100'
            borderWidth = '2px'
            p = '3'
            borderRadius = 'lg'
            width = '100%'
            maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems = 'stretch'>
            {todos.map((todo) => (
                <HStack key={todos.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon={<DeleteIcon />} 
                    isRound='true' 
                    onClick={() => deleteTodo(todo.id)}/>
                </HStack>
            ))}
        </VStack>
    );
}
export default TodoList;