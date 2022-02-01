import { Heading, VStack, Text, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Todos from './Todos'
import { ReactComponent as TodoSvg } from './todosvg.svg'

function Dashboard({ user }) {
    return (
        <Stack direction={(user) ? "column" : ["column", "row"]} mt={16} justify="center" p={8} spacing="8" >
            <VStack color="white" justify="center" textAlign="center"><Heading fontFamily="Gluten" fontSize={["40", "50", "60"]}>TO - DO LIST</Heading>
                <Text>All your task at one place </Text></VStack>
            {(user) ? <Text color="white" textAlign="center" fontFamily="Gluten" m={8}>Hello <i>{user.email} </i>, Add your tasks</Text> : ""}
            {(!user) ?
                <Flex justify="center"><TodoSvg height="100%" /></Flex> : <Todos user={user} />}
        </Stack>
    )
}

export default Dashboard
