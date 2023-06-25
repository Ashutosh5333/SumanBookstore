import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Card,
  Text,
  Flex,
  Button,
  Heading,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDCart, GetSinglebookdetail } from "../Redux/AppReducer/Action";
import { Skelton } from "./Skelton";

export const BookDetail = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [single, Setsingle] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(GetSinglebookdetail(id))
      .then((res) => {
        Setsingle(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleAddTocart = (image, author, summary, price, title) => {
    const payload = {
      image,
      author,
      summary,
      price,
      title,
    };

    dispatch(ADDCart(payload))
      .then((res) => {
        console.log(res);
        if (res.payload.msg === "Cart Added Succesfully") {
          toast({
            position: "top",
            colorScheme: "green",
            status: "success",
            title: "Added To Cart",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

<Flex flexDirection={"column"} gap="10px">


      

{!SmallScreen && (
  <Box
    width={{ base: "80vw", md: "90vw", lg: "90vw" }}
    m="auto"
    mt="-20"
    p="6"
    mb="20"
    spacing={3}
  >
    {single ? (
      <Flex boxShadow={"dark"} justifyContent={"space-between"} gap="5">
        <Flex  w="40%">
          <Card m="auto">
            <Image
              boxSize="500px"
              m="auto"
              borderRadius="lg"
              src={single?.image}
            />
          </Card>
        </Flex>

        <Flex
          w="50%"
          flexDirection={"column"}
        >
          <Box w="90%" m="auto">
            <Text fontWeight={"600"} color="#050452">
              {" "}
               {` Price- ${single?.price}`}
            </Text>
          </Box>
          <Box w="90%" m="auto" mt="5">
            <Heading color="#050452"> {single?.author} </Heading>
          </Box>

          <Box w="90%" m="auto" mt="5">
            <Text fontWeight={"600"} letterSpacing={"1px"}>
              {single?.title}{" "}
            </Text>
          </Box>

          <Box w="90%" m="auto" mt="5">
            <Text fontWeight={"600"}>{single?.summary} </Text>
          </Box>

          <Box w="90%" m="auto" mt="5">
            <Button  color="skyblue"
                  bg="black"
                  isLoading={loading}
                  onClick={() =>
                    handleAddTocart(
                      single?.image,
                      single?.author,
                      single?.summary,
                      single?.price,
                      single?.title
                    )
                  } >  Add To Cart </Button>
          </Box>
        </Flex>
      </Flex>
    ) : (
      <Skelton />
    )}

    
  </Box>
)}




{SmallScreen && (
  <Box
    width={{ base: "95vw", md: "90vw" }}
    m="auto"
    p="6"
    spacing={3}
    mt="-10"
  >
    <Flex h="60vh" boxShadow={"dark"} flexDirection={"column"} gap="5">
      <Flex w="90%" m="auto">
        <Box m="auto">
          <Image
            boxSize="400px"
            m="auto"
            src={single?.image}
          />
        </Box>
      </Flex>

      <Flex h="60vh" w="90%" m="auto" flexDirection={"column"}>
        <Box w="90%" m="auto" textAlign={"center"}>
          <Text fontWeight={"600"} color="#050452">
          {` Price- ${single?.price}`}
          </Text>
        </Box>
        <Box w="90%" m="auto" mt="5">
          <Heading textAlign={"center"} color="#050452">
            {" "}
            {single?.author}{" "}
          </Heading>
        </Box>

        <Box w="90%" m="auto" mt="5">
          <Text
            textAlign={"center"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            {single?.summary}{" "}
          </Text>
        </Box>

        <Box w="90%" m="auto" mt="5">
          <Text textAlign={"center"} fontWeight={"600"}>
            {single?.title}{" "}
          </Text>
        </Box>

        <Box w="90%" m="auto" mt="5" textAlign={"center"}>
        <Button  color="skyblue"
                  bg="black"
                  isLoading={loading}
                  onClick={() =>
                    handleAddTocart(
                      single?.image,
                      single?.author,
                      single?.summary,
                      single?.price,
                      single?.title
                    )
                  } >  Add To Cart </Button>
        </Box>
      </Flex>
    </Flex>

   

  </Box>
)}



</Flex>


  </>
  )
};
