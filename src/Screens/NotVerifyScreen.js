import { Box, Center, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import { SimpleLineIcons } from "@expo/vector-icons";
import Buttone from "../components/Buttone";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w='full' h={250}>
        <SimpleLineIcons name='handbag' size={200} color='black' />
      </Center>
      <VStack space={6} px={5} alignItems='center'>
        <Buttone bg={Colors.black} color={Colors.white}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
