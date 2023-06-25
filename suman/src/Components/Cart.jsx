import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Flex,
  Stack,
  useToast} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { Deletecartdata, GetCartdata } from "../Redux/AppReducer/Action";

const Cart = () => {
  const toast = useToast()
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AppReducer.CartData);
  
  useEffect(() => {
    dispatch(GetCartdata);
  }, []);


   const handledeleteCart = (_id) =>{
        dispatch(Deletecartdata(_id))
        .then((res) =>{
        
            toast({
              position: "top",
              colorScheme: "green",
              status: "success",
              title: "Delete To Cart",
            })
            dispatch(GetCartdata);
        })
        .catch((err) =>{
           console.log(err)
        })
   }


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
                     
                        <Button  color="#fff"
                        bg="black" onClick={() =>handledeleteCart(el._id)}> Delete </Button>
                     

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