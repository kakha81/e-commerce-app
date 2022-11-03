import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../color";

import CartIterms from "../components/CartIterms";

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
      <Box showsVerticalScrollIndicator={false}>
        <CartIterms />
      </Box>
    </Box>
  );
}

export default CartScreen;
