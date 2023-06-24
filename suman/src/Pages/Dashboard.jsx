import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Dashboard = () => {

  return (
    <>

     <Box  w="90vw" m="auto" mb="20" >
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          
             <Card >

            <CardBody>
              <Image
               objectFit='cover'
               boxSize={"300"}
                 m="auto"
                
                alt="Book Image"
                borderRadius="lg"
              />

               <Link > 
              <Stack mt="6" spacing="3">
                <Heading size="md"> </Heading>
                <Text noOfLines={"1"} letterSpacing={"1px"}>
                 
                </Text>
                <Text color="blue.600" fontWeight={"600"}  letterSpacing={"1px"} fontSize={"1rem"} >
                 
                </Text>
              </Stack>
              </Link>

            </CardBody>
          </Card>
      

         
        </SimpleGrid>
      </Box> 
    
    </>
  )
}

export default Dashboard