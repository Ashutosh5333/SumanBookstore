import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Card,
  Text,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDCart, GetSinglebookdetail } from "../Redux/AppReducer/Action";
import { Skelton } from "./Skelton";

export const BookDetail = () => {
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
      <Box
        width={{ base: "90vw", md: "90vw", lg: "90vw" }}
        m="auto"
        mt="-20"
        p="6"
        mb="20"
        spacing={3}
      >
        {single ? (
          <Flex
            boxShadow={"dark"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap="5"
          >
            <Flex w="60%" m="auto">
              <Card m="auto">
                <Image
                  objectFit="cover"
                  boxSize={{ base: "300", md: "400", lg: "500" }}
                  m="auto"
                  borderRadius="lg"
                  src={single?.image}
                />
              </Card>
            </Flex>

            <Flex w="90%" m="auto" mt="10" flexDirection={"column"}>
              <Box w="90%" m="auto">
                <Text
                  fontWeight={"600"}
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
                  color="#050452"
                >
                  {` Author -  ${single?.author} `}{" "}
                </Text>
              </Box>

              <Box w="90%" m="auto" mt="10">
                <Text fontWeight={"400"} color="#050452" letterSpacing={"1px"}>
                  {single?.summary}{" "}
                </Text>
              </Box>

              <Flex justifyContent={"space-between"} w="100%" m="auto" mt={{base:"10"}}>
                <Box>
                  <Text
                    fontWeight={"600"}
                    fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                    color="#050452"
                  >
                    {single?.title}{" "}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight={"600"}
                    fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                    color="#050452"
                  >
                    {`Price - ${single?.price}`}{" "}
                  </Text>
                </Box>
              </Flex>

              <Box w="90%" m="auto" mt="10">
                <Button
                  color="skyblue"
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
                  }
                >
                  {" "}
                  Add To Cart{" "}
                </Button>
              </Box>
            </Flex>
          </Flex>
        ) : (
          <Skelton />
        )}
      </Box>
    </>
  );
};
