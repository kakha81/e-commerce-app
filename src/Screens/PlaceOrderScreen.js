import { Box, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome } from "@expo/vector-icons";

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <OrderInfo
            title='CUSTOMER'
            subTitle='Admin Kakha'
            text='admin@example.com'
            icon={<FontAwesome name='user' size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
