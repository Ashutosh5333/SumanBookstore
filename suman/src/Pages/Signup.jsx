import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isName, setisName] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [post, SetPost] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (  post.email !== "" && post.name !== "" &&  post.password !== "" ) {
     
       
    } else {
      if (post.email === "") {
        setisEmail(true);
      }
      if (post.password === "") {
        setisPassword(true);
      }

      if (post.name === "") {
        setisName(true);
      }
    }
  };

  return (
    <>
      <Box boxShadow={"lg"} mt="-10">
        <Box width={"100%"} position={"relative"} m="auto">
          <Card
            w={{ base: "100%", md: "50%", lg: "450px" }}
            m="auto"
            border={"none"}
            p="8"
          >
            <Text
              textAlign={"center"}
              fontWeight={"600"}
              mb="5"
              color="#220f7a"
              fontSize={"1.8rem"}
            >
              {" "}
              Signup{" "}
            </Text>

            <VStack maxW={"2xl"} spacing={5}>
              <FormControl id="name" isInvalid={isName}>
                <FormLabel
                  color={isName ? "red" : "gray"}
                  mb="10px"
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  fontSize={"1.1rem"}
                >
                  Name
                </FormLabel>

                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  bg="#e0e0de"
                  borderRadius={"20"}
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="email" isInvalid={isEmail}>
                <FormLabel
                  mb="10px"
                  color={isEmail ? "red" : "gray"}
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  fontSize={"1.1rem"}
                >
                  {" "}
                  Email{" "}
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  bg="#e0e0de"
                  borderRadius={"20"}
                  mt="-10px"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="password" isInvalid={isPassword}>
                <FormLabel
                  mb="10px"
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  color={isEmail ? "red" : "gray"}
                  fontSize={"1.1rem"}
                >
                  {" "}
                  Password{" "}
                </FormLabel>
                <Input
                  name="password"
                  bg="#e0e0de"
                  borderRadius={"20"}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                />
                {!isPassword ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Password is required.
                  </FormErrorMessage>
                )}
              </FormControl>

              <Button
                width="100%"
                size="lg"
                onClick={handleSubmit}
                bg="#050452"
                color="#fff"
                borderRadius={"20"}
                isLoading={loading}
              >
                Signup
              </Button>
            </VStack>

            <Box w="80%" m="auto" mt="15px">
              <Text textAlign={"center"} fontWeight={"600"}>
                {" "}
                Already have an account ?
                <Link to="/login">
                  <span style={{ color: "blue" }}> Signup in </span>
                </Link>
              </Text>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
