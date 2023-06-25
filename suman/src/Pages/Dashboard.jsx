import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Flex,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GetAllBooksData } from "../Redux/AppReducer/Action";
import DashboardSkelton from "./DashboardSkelton";

const Dashboard = ({searchbook}) => {
  const dispatch = useDispatch();
  const Books = useSelector((store) => store.AppReducer.Booksdata);
 

  useEffect(() => {
    dispatch(GetAllBooksData);
  }, []);

 

  return (
    <>
      <Box w="90vw" m="auto" mb="20">
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {
            
            Books.length > 0  ?


            Books.filter((value) => {
                if (searchbook == "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(
                    searchbook.toLowerCase()
                  )
                ) {
                  return value;
                } else if (
                  value.author.toLowerCase().includes(searchbook.toLowerCase())
                ) {
                  return value;
                }
              })
            
            .map((el) => {
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
                        <Button color="green"> View </Button>
                      </Link>

                    </Flex>
                  </CardBody>
                </Card>
              );
            })
              : <DashboardSkelton/>
            
            
            }
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Dashboard;
