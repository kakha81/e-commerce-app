import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../components/Buttone";
import Review from "../components/Review";
import products from "../data/Product";

function SingleProductScreen() {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/2.png")}
          alt='Image'
          w='full'
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignSelf='center' my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHight={30}
            minValue={0}
            iconSize={25}
            step={1}
            borderColor={Colors.deepGray}
            roundedtextColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${products[1].price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum d lorem ipsum
          dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum d lorem
          ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum d
          lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem
          ipsum d lorem ipsum dolor
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
