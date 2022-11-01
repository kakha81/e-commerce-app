import { Box, Heading, Image, Input, Text, View, VStack } from "native-base";

import React from "react";
import Colors from "../color";
import { MaterialIcons } from "@expo/vector-icons";

function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt='Logo'
        resizeMode='cover'
        size='lg'
        w='full'
        source={require("../../assets/cover.jpg")}
      />
      <Box
        w='full'
        h='full'
        position='absolute'
        top='0'
        px='60'
        pb='30'
        justifyContent='flex-end'
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt='6'>
          <Input
            InputLeftElement={
              <MaterialIcons name='email' size={26} color={Colors.main} />
            }
            variant='underlined'
            fontSize='16px'
            placeholder='user@gmail.com'
            w='100%'
            color={Colors.main}
            bg={Colors.white}
            borderRadius='10'
            borderBottomColor={Colors.underline}
          />
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginScreen;
