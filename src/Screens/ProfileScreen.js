import { Box, Center, Heading, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { SimpleLineIcons } from "@expo/vector-icons";
import Tabs from "../components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={5}>
        <SimpleLineIcons
          name='user'
          size={48}
          color={Colors.white}
          resizeMode='cover'
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Kakha
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/*TABS*/}
      <Tabs />
    </>
  );
}

export default ProfileScreen;
