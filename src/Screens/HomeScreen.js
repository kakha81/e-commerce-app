import { Box } from "native-base";
import React from "react";
import Colors from "../color";
import HomeSearch from "../components/HomeSearch";
import HomeProducts from "../components/HomeProducts";

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.price}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
