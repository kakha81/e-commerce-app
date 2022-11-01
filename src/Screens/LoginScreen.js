import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  View,
  VStack,
} from "native-base";

import React from "react";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

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
        px='5'
        pb='10'
        justifyContent='flex-end'
      >
        <Heading>LOG IN</Heading>
        <VStack space={5} pt='6'>
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name='email' size={25} color={Colors.main} />
            }
            variant='underlined'
            fontSize='12px'
            placeholder='user@gmail.com'
            pl={2}
            w='100%'
            color={Colors.main}
            bg={Colors.white}
            rounded={50}
            borderBottomColor={Colors.underline}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name='eye' size={24} color={Colors.main} />
            }
            variant='underlined'
            fontSize='16px'
            placeholder='********'
            pl={2}
            w='100%'
            type='password'
            color={Colors.main}
            bg={Colors.white}
            rounded={50}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.blue,
          }}
          my={30}
          w='60%'
          h='7%'
          alignSelf='center'
          rounded={50}
          bg={Colors.main}
        >
          LOGIN
        </Button>
        <Button
          _pressed={{
            bg: Colors.blue,
          }}
          my={30}
          w='60%'
          h='7%'
          alignSelf='center'
          rounded={50}
          bg={Colors.main}
        >
          SIGNUP
        </Button>
      </Box>
    </Box>
  );
}

export default LoginScreen;
