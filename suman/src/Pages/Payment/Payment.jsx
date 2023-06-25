import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Payment = () => {

  return (
    <>
    <Box maxW="lg" mx="auto" p={4}>
      
      <Heading mb={4}>Payment Confirmed </Heading>

      <Heading mb={4}>Thanks for Shoping</Heading>
      
      <Text mb={4}>
        Thank you for your payment! Your order has been confirmed and will be
        processed shortly.
      </Text>

      <Button colorScheme="teal" onClick={() => window.location.href = '/'}>Back to Home</Button>
    </Box>
    </>
  )
}

export default Payment