import React, { useEffect, useState } from "react";
import {
  Box,
  Image, Card,
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetSinglebookdetail } from "../Redux/AppReducer/Action";
import { Skelton } from './Skelton';

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

  return (
    <>
    <Box  width={{ base: "80vw", md: "90vw", lg: "90vw" }}
         m="auto"
         mt="-20"
         p="6"
         mb="20"
         spacing={3}
       >
         {single ? (
           <Flex  boxShadow={"dark"} justifyContent={"space-between"} 
            flexDirection={"column"}
           gap="5">
             <Flex
               w="60%" m="auto"
             >
               <Card m="auto">
                 <Image
                   objectFit="cover"
                   boxSize="500px"
                   m="auto"
                   borderRadius="lg"
                   src={single?.image}
                 />
               </Card>
             </Flex>

             <Flex
             
               w="90%" m="auto" mt="10"
               flexDirection={"column"}
             >
               <Box w="90%" m="auto">
                 <Text fontWeight={"600"} fontSize={"2rem"} color="#050452">
                 {` Author -  ${single?.author} `} </Text>
               </Box>

               <Box w="90%" m="auto" mt="10">
                 <Text fontWeight={"400"}  color="#050452" letterSpacing={"1px"}>
                   {single?.summary}{" "}
                 </Text>
               </Box>

             <Flex justifyContent={"space-between"} w="90%" m="auto">
               <Box >
                 <Text fontWeight={"600"} fontSize={"2rem"} color="#050452">{single?.title} </Text>
               </Box>
               <Box>
                  <Text fontWeight={"600"} fontSize={"2rem"} color="#050452">{`Price - ${single?.price}`} </Text>
               </Box>

             </Flex>
               

               <Box w="90%" m="auto" mt="10">
                 <Button bg="black" color="#fff"> Add To Cart </Button>
               </Box>

             </Flex>

           </Flex>
         ) : (
           <Skelton />
         )}

        

       </Box>
    
    </>
  )
}
