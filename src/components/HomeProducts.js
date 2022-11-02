import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import products from "../data/Product";
import Colors from "../color";
import Rating from "./Rating";

function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        {products.map((product) => {
          return (
            <Pressable
              key={product._id}
              w='47%'
              bg={Colors.white}
              rounded='xl'
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
              owerflow='hidden'
            >
              <Image
                source={product.image}
                alt={product.name}
                w='full'
                h={24}
                resizeMode='contain'
              />
              <Box px={4} pt={1}>
                <Heading size='sm' bold>
                  ${product.price}
                </Heading>
                <Text fontSize={10} mt={1} isTruncated w='full'>
                  {product.name}
                </Text>
                {/* rating */}
                <Rating value={product.rating} />
              </Box>
            </Pressable>
          );
        })}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;