import React from 'react'
import { Stack, Button, Heading, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import {
    signOut,
} from "firebase/auth";

function Navbar({ user }) {
    const logout = async () => {
        await signOut(auth);
    };
    return (
        <Stack direction="row" bgColor="white" p={4} >
            <Link to="/"><Heading color="teal" fontFamily="Gluten">To - Do</Heading></Link>
            <Spacer />
            {(!user) ?
                <Link to="/login"><Button colorScheme="teal">Login</Button></Link> : <Button onClick={logout} colorScheme="teal">Logout</Button>}
            {(user) ? <Button isDisabled colorScheme="teal">SignUp</Button> : <Link to="/register"><Button colorScheme="teal">Sign Up</Button></Link>}
        </Stack>
    )
}

export default Navbar
