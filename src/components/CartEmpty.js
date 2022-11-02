import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { Feather } from "@expo/vector-icons";
import Buttone from "../components/Buttone";

export default function CartEmpty() {
  return (
    <Box flex={1} px={4}>
      <Center h='90%'>
        <Center w={200} h={200} bg={Colors.blue} rounded='full'>
          <Feather name='shopping-cart' size={64} color={Colors.white} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.black} color={Colors.white}>
        START SHOPPING
      </Buttone>
    </Box>
  );
}
