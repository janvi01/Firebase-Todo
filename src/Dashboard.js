import { Heading, VStack, Text, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Todos from './Todos'
import { ReactComponent as TodoSvg } from './todosvg.svg'

function Dashboard({ user }) {
    return (
        <Stack direction={(user) ? "column" : ["column", "row"]} mt={16} pl={[0, 4, 16]}>
            <VStack p={[12, 12, 16]} color="white" justify="center"><Heading fontFamily="Gluten" fontSize={["40", "40", "50"]}>TO - DO LIST</Heading>
                <Text>All your task at one place</Text></VStack>
            {(user) ? <Text color="white" textAlign="center" fontFamily="Gluten" m={8}>Hello <i>{user.email} </i>, Add your tasks</Text> : ""}
            {(!user) ?
                <Flex justify="center"><TodoSvg height="100%" style={{ margin: "8px" }} /></Flex> : <Todos user={user} />}
        </Stack>
    )
}

export default Dashboard
