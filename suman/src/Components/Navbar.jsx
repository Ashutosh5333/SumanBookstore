import React from 'react'
import { useState } from 'react';
import { Box, Flex,Text, Input, IconButton, Tooltip, useDisclosure  } from '@chakra-ui/react'
import {Link, useNavigate} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {FaUserCircle} from "react-icons/fa"
import {BsCartCheck, BsSearch} from "react-icons/bs"
import {BiLogIn,BiLogOut} from "react-icons/bi"
import {GiBookmarklet} from "react-icons/gi"

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  

    const loggeddata = JSON.parse(localStorage.getItem("loggeduser"))
   

     
  return (
    <>
    <Box  px={4} mb={20} shadow='lg' borderBottom={{base : '0px', md :'0px'}} padding='10px'
      borderRadius={"20"} h="20"
      >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex  width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to="/" >
                <GiBookmarklet fontSize={"3rem"}/> 
              </Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               
             
               <Flex width={{base : '0', md : '60%', lg :'70%'}} 
                  borderRadius={"20"}   bg="#e0e0de"
                padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='10px'
               
                 border='0px' placeholder='Search ' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '25%', lg :'15%'}} justifyContent='space-around' fontSize='25px'>
               {
                loggeddata ? 
               <Tooltip bg='#CBD5E0' color='black' label={loggeddata? "Logout" :"Login"  } ><Link ><Text ><BiLogOut/></Text></Link></Tooltip>
                :
               <Tooltip bg='#CBD5E0' color='black' label={ "Login" } ><Link to={ "/login"  } ><Text ><BiLogIn/></Text></Link></Tooltip>
               }
              
               <Tooltip bg='#CBD5E0' color='black' label='Cart'><Link to='/cart'><Text><BsCartCheck/></Text></Link></Tooltip>
                          
              <Tooltip bg='#CBD5E0' color='black'
               label={loggeddata ? loggeddata.userName :"Profile" } >
              <Link  ><Text ><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 

        </Box>    
 
     

    
    </>
  )
}

export default Navbar
