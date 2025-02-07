import { Box, Heading, Image } from "@chakra-ui/react"

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
                </Box>

        </Box>
    )
};

export default ProductCard;
