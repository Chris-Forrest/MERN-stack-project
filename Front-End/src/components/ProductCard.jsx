import { Box, Heading, Image, Text } from "@chakra-ui/react"

const ProductCard = ({ product }) => {
    return(
        <Box
            shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
        >
            <Image 
                src={product.image} 
                alt={product.name} 
                h={48}
                w={"full"}
                objectFit={"cover"}
                />
                <Box p={4}>
                    <Heading
                        as={'hs'}
                        size={'md'}
                        mb={2}
                    >
                        {product.name}
                    </Heading>
                    <Text
                        fontWeight={'bold'}
                        fontSize={'xl'}
                        color={'blue.900'}
                        mb={4}
                    >
                        ${product.price}
                    </Text>
                </Box>

        </Box>
    )
};

export default ProductCard;
