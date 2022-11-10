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
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={product.image}
          alt='Image'
          w='full'
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignSelf='center' my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHight={30}
              minValue={0}
              maxValue={product.countInStock}
              iconSize={25}
              step={1}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
              Out of stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price} ₾
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.main}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
