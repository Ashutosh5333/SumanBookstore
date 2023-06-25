import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Flex,
  Stack,
  Toast} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GetCartdata } from "../Redux/AppReducer/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AppReducer.CartData);
  

  useEffect(() => {
    dispatch(GetCartdata);
  }, []);


  return (
    <>
      <Box mt="-10">
          <Heading textAlign={"center"}> Cart Page  </Heading>
      </Box>

      <Box w="90vw" m="auto" mb="20">
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {data.length > 0 &&
            data.map((el) => {
              return (
                <Card key={el._id}>

                  <CardBody>
                    <Image
                      objectFit="cover"
                      boxSize={{ md: "400", lg: "500" }}
                      m="auto"
                      src={el.image}
                      alt="Book Image"
                      borderRadius="lg"
                    />

                    <Stack mt="6" spacing="3">
                      <Heading size="md">{el.title} </Heading>
                      <Text noOfLines={"1"} letterSpacing={"1px"}>
                        {el.summary}
                      </Text>
                      <Text
                        color="blue.600"
                        fontWeight={"600"}
                        letterSpacing={"1px"}
                        fontSize={"1rem"}
                      >
                        {el.author}
                      </Text>
                      <Text
                        color="brown"
                        fontWeight={"600"}
                        letterSpacing={"1px"}
                        fontSize={"1rem"}
                      >
                        {el.price}
                      </Text>
                    </Stack>

                    <Flex justifyContent={"space-between"} gap="5" mt="5">
                      <Link to={`/book/${el._id}`}>
                        <Button  color="#fff"
                        bg="black"> Delete </Button>
                      </Link>

                      <Button
                        color="#fff"
                        bg="pink.800"
                      >
                       CheckOut
                      </Button>
                    </Flex>

                  </CardBody>
                </Card>
              );
            })}
        </SimpleGrid>
      </Box>

    
    </>
  )
}

export default Cart