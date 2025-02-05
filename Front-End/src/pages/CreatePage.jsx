import { Box, Container, Heading, Input, useColorModeValue, VStack, Button } from '@chakra-ui/react';
import { useState } from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState ({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!succes) {
      toastStore({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }else { 
      toastStore({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
      setNewProduct({ name: "", price: "", image: "" })
  };
  
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
          <VStack spacing={4}>
            <Input 
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder='Price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;
