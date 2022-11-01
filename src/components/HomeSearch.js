import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import Colors from "../color";
import { Feather } from "@expo/vector-icons";

function HomeSearch() {
  return (
    <HStack
      space={5}
      w='full'
      px={3}
      bg={Colors.main}
      py={4}
      alignItems='center'
      safeAreaTop
    >
      <Input
        placeholder='Nike, Puma, Adidas ...'
        w='85%'
        color={Colors.black}
        bg={Colors.white}
        fontSize={20}
        type='search'
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3}>
        <Feather name='shopping-cart' size={24} color={Colors.white} />
        <Box
          px={1}
          rounded='full'
          position='absolute'
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          1
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
