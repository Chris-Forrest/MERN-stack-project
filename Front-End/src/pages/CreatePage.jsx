import { Box, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState ({
    name: "",
    price: "",
    image: "",
  });
  
  return (
    <Container>
      <VStack spacing="8">
        <Heading as="h1" size={"2x1"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"} bg={useColorModeValue("white", "gray.700")}
          p={6} rounded={"lg"} shadow={"md"}
        >

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;
