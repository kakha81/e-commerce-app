import { Box, Button, Center, HStack, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../components/Buttone";
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
      <Box showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent='space-between'
            bg={Colors.white}
            shadow={2}
            w='90%'
            pl={5}
            h={45}
            alignItems='center'
          >
            <Text bold>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{ bg: Colors.main }}
            >
              $350
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color={Colors.white} mt={10}>
            CHECKOUT
          </Buttone>
        </Center>
      </Box>
    </Box>
  );
}

export default CartScreen;
