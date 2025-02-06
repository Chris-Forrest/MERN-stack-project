import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/products";
import { useEffect } from "react";

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  console.log("products",products)

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} /> 
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default HomePage