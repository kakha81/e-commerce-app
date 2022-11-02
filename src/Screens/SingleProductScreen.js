import { Box, Heading, Image, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import Rating from "../components/Rating";
// import product from "../data/Product";

function SingleProductScreen() {
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/1.png")}
          alt='Image'
          w='full'
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New
        </Heading>
        <Rating value={4} />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
