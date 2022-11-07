import { NativeBaseProvider } from "native-base";
import OrderScreen from "./src/Screens/OrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider>
  );
}
