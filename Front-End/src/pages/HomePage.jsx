import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/products";

const HomePage = () => {
	

	return (
		<Container maxW={"container.xl"} py={12}>
			<VStack spacing={8}>
			   <Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500"}
					textAlign={"center"}
					bgClip={"text"}
		       >
			     Home Page 🚀
		       </Text>
			</VStack>
		</Container>
	);
};
export default HomePage;