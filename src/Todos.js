import { Button, Input, Spacer, Divider, Box, VStack, HStack, Text, IconButton, Flex, Spinner } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { ImCross } from 'react-icons/im'
import {
    updateDoc,
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

function Todos({ user }) {
    const [text, setText] = useState("");
    const [prevTodo, setprevTodo] = useState([]);
    const [add, setadd] = useState(true);
    const [del, setdel] = useState(true);
    const [todolist, settodolist] = useState([]);
    // to store our prev todo in prevTodo state
    // get doc and snapshot
    useEffect(() => {
        if (user) {
            if (user.uid) {
                const docRef = doc(db, "todos", user.uid);
                const getTodos = async () => {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data().todo);
                        settodolist(docSnap.data().todo);
                        setprevTodo(docSnap.data().todo);
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }
                getTodos();
            }
        }
        else
            console.log("No user");
    }, [user, add, del]);
    const addTodo = async () => {
        await setDoc(doc(db, "todos", user.uid), {
            todo: [...prevTodo, text]
        });
        setText("");
        setadd(!add);

    };
    const deleteTodo = async (deltodo) => {
        const docRef = doc(db, "todos", user.uid);
        const docSnap = await getDoc(docRef);
        const updated = docSnap.data().todo.filter(todo => todo !== deltodo);
        await updateDoc(docRef, {
            todo: updated
        });
        setdel(!del);
    };
    return (
        <div>
            <HStack justifyContent="center"  >
                <Input type="text" placeholder="add task.." width="45%" value={text} color="white" onChange={(e) => setText(e.target.value)} ></Input>
                <Button onClick={addTodo}>Add</Button>
            </HStack>
            <Flex justifyContent="center">
                {todolist.length > 0 ? (
                    <VStack width={["90%", "70%", "50%"]} bgColor="white" p={[4, 4, 8]} borderRadius="10px" m={4}>
                        {todolist.map((todo, key) => {
                            return (
                                <Box width="100%" key={key} >
                                    <HStack>
                                        <Text fontWeight="bold" color="black"> {todo}</Text>
                                        <Spacer />
                                        <IconButton icon={<ImCross />} colorScheme="teal" onClick={() => deleteTodo(todo)}></IconButton>
                                    </HStack>
                                    <Divider mt={4} />
                                </Box>
                            )
                        })}
                    </VStack>) : <Spinner m={4} />}
            </Flex>
        </div>
    )
}

export default Todos
