import React from 'react'
import { Box, Input, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Text , Flex,Image, Card } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

import {Link, Navigate,useNavigate} from "react-router-dom"
import Dashboard from './Dashboard';



const Home = () => {
  const navigate = useNavigate()
 const { isOpen, onOpen, onClose } = useDisclosure();   
 const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
 


  return (
    <>
    <Flex w="90vw" m="auto" mt="-20"
          justifyContent={"space-around"}
         flexDirection={{base:"column",md:"row",lg:"row"}} gap="5"
        >
          
          <Flex boxShadow={"lg"} mt="10"  >
             <Image borderRadius={"lg"} src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
               alt="Books"
              />
          </Flex>
          
          <Flex boxShadow={"lg"} mt="10" >
          <Image borderRadius={"lg"} src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
               alt="Books"
              />
             
           </Flex>


       </Flex>



      {/* ---------------------------------------- */}


  <Box   mt={{ base:"10px ",md: "-10px", lg: "-10px" }}  p={{base:"5"}} >
      
        <Text   textAlign={{ base: "start", lg: "center" }} color="#050452" fontWeight={"600"} >
        <span style={{fontSize:"4rem", color:"red"}}>H</span>ello  </Text>

         <Heading  textAlign={{ base: "start", lg: "center" }} 
          >Let's Find Your Books</Heading>
           
           {
            SmallScreen && <Box w="50vw" >
            <Input
              borderRadius='10px'
                 border='0px' placeholder='Search Books' padding='5px'
            />
           </Box>
           }
          
        


      
       
       <Box h="auto" mt="10" >
         <Text     color="#220f7a" fontWeight={"700"} p="5"> Available Books </Text>
          <Box >
              
                <Dashboard/>
          </Box>
       </Box>
          

          


     </Box>
    
    
    
    </>
  )
}

export default Home