import { Container, Heading, VStack } from '@chakra-ui/react';
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
      </VStack>
    </Container>
  )
}

export default CreatePage;
