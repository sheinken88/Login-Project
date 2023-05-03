import React from "react";
import {
  Button,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="4"
        backgroundColor="gray.100"
      >
        <Box p="2">
          <Link to="/">
            <Heading size="md">Proyecto Login</Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Link to="/signup">
            <Button colorScheme="teal" variant="outline">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="teal">Log in</Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default Navbar;
