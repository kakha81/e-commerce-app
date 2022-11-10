import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Buttone from "../components/Buttone";
import Colors from "../color";

const OrdersInfos = [
  {
    title: "Products",
    price: 100,
    color: "black",
  },
  {
    title: "Shipping",
    price: 30,
    color: "black",
  },
  {
    title: "Tax",
    price: 20,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 150,
    color: "main",
  },
];

const OrderModel = () => {
  const navigation = useNavigation();

  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size='lg'>
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Text fontWeight='medium'>{i.title}</Text>
                  <Text color={i.color === "main" ? Colors.main : Colors.black}>
                    {i.price} ₾
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w='full'
              justifyContent='center'
              bg={Colors.white}
              h={45}
              rounded={3}
              overflow='hidden'
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/BankOfGeorgia.jpg")}
                alt='Bank Of Georgia'
                resizeMode='contain'
                w='full'
                h={60}
              />
            </Pressable>
            <Button
              w='full'
              mt={4}
              bg={Colors.main}
              h={45}
              _text={{ color: Colors.white }}
              _pressed={{ color: Colors.dodgerBlue, bg: Colors.black }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
