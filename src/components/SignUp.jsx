import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";
import * as settings from "../settings";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SignUp() {
  const navigate = useNavigate();
  const name = useInput();
  const lastName = useInput();
  const age = useInput();
  const nationality = useInput();
  const email = useInput();
  const password = useInput();
  const userName = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name.value,
      lastName: lastName.value,
      age: age.value,
      nationality: nationality.value,
      email: email.value,
      password: password.value,
      userName: userName.value,
    };

    axios
      .post(`${settings.axiosURL}/api/users/signup`, data)
      .then((res) => res.data)
      .then((user) => {
        navigate(`/api/${user.id}`);
      });
  };

  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
      maxW="md"
      mx="auto"
      mt="10"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              onChange={name.onChange}
              value={name.value}
              placeholder="First name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input {...lastName} placeholder="Last name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input {...age} placeholder="Age" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Nationality</FormLabel>
            <Input {...nationality} placeholder="Nationality" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input {...email} placeholder="Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>UserName</FormLabel>
            <Input {...userName} placeholder="UserName" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input {...password} type="password" placeholder="Password" />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
