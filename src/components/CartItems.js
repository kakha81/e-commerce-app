import { Box, Center, Pressable, Text } from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { Colors } from "react-native/Libraries/NewAppScreen";
import products from "../data/Product";

const Swiper = () => {
    <SwipeListView rightOpenValue={-50}
        previewRowKey={0}
        previewOpenValue={-48}
        previewOpenDelay={3000}
        data={products.slice(0, 2)}
        renderHiddenItem={ renderHiddenItems }
        renderItem={ renderItems}
        showVerticalScrollIndicator={false}
    />
}

const renderItems = (data) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center"
                bg={Colors.white}
                shadow={1} rounded={10}
                overFlow="hidden">
                
            </HStack>
        </Box>
    </Pressable>
}

const renderHiddenItems = () => {
    <Pressable w={50} roundedTopRight={10}
        roundedBottomRight={10} h="80%" w="auto"
        justifyContent="center" bg={Colors.red}>
        <Center alignItems="center" space={ 2}>
            <FontAwesome name="trash" size={24} color={ Colors.white} />
        </Center>
    </Pressable>


    const CartItems = () => {
  return (
    <Box mr={6}>
      < Swiper />
    </Box>
  );
};
export default CartItems;
