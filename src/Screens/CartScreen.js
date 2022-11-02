import { Box, Center, ScrollView, Text, View } from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w='full' py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
