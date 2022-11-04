import { NativeBaseProvider } from "native-base";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  );
}
