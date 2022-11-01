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
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

function RegisterScreen() {
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
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt='6'>
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name='user' size={25} color={Colors.main} />
            }
            variant='underlined'
            fontSize='12px'
            placeholder='Kakhaber Mchedlishvili'
            pl={2}
            type='text'
            w='100%'
            color={Colors.main}
            bg={Colors.white}
            rounded={50}
            borderBottomColor={Colors.underline}
          />
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
          SIGN UP
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
          LOG IN
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
