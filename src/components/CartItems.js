import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../color";
import products from "../data/Product";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey='0'
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderItem={renderItem}
    renderHiddenItem={hiddenItem}
    showVerticalScrollIndicator={false}
  />
  // Cart Item
);
const renderItem = (data) => (
  <Pressable>
    <Box ml={3} mb={3}>
      <HStack
        alignItems='center'
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow='hidden'
      >
        <Center w='30%' bg={Colors.deepGray}>
          <Image
            source={data.item.image}
            alt={data.item.name}
            w='full'
            h={24}
            resizeMode='contain'
          />
        </Center>
        <VStack w='150' px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={16}>
            {data.item.name}
          </Text>
          <Text bold fontSize={16} color={Colors.lightBlack}>
            ${data.item.price}
          </Text>
        </VStack>
        <Center flex={1} alignItems='flex-end' mr={5}>
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.red }}
            _text={{ color: Colors.white }}
          >
            1
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);
// Hidden

const hiddenItem = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h='88%'
    ml='auto'
    justifyContent='center'
    bg={Colors.red}
  >
    <Center alignItems='center' space={2}>
      <FontAwesome name='trash' size={24} mr={2} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={2}>
      <Swiper />
    </Box>
  );
};
export default CartItems;
