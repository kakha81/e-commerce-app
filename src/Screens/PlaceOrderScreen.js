import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import PlaceOrderModel from "../components/PlaceOrderModel";

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
          <OrderInfo
            title='SHIPPING INFO'
            subTitle='Shipping: Georgia'
            text='Pay Method: Bank of Georgia'
            icon={
              <FontAwesome5
                name='shipping-fast'
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title='DELIVER TO'
            subTitle='Address:'
            text='21 dst 3, Rustavi, 3700'
            icon={
              <Ionicons name='location-sharp' size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
