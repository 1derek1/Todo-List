import {useState} from 'react';
import { 
    HStack, 
    Button,
    Input,
    useToast
} from '@chakra-ui/react'
import {nanoid} from 'nanoid';

function AddTodo({ addTodo }) {   
    
    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No content inside.',
                description: "Empty error.",
                status: 'failure',
                duration: 2000,
                isClosable: true,
            });
            return
        }

        const todo = {
            id: nanoid(),
            body: content,
        };

        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState()

    return (
    <form onSubmit={handleSubmit}>ll
        <HStack mt="8">
            <Input 
                variant="filled" 
                placeholder="try to add sth" 
                value={content} 
                onChange={ (e) => setContent(e.target.value)}/>
            <Button colorScheme="pink" px="8" type="submit">Add Todo</Button>
        </HStack>
    </form>
    )
}

export default AddTodo;