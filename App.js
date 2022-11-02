import { NativeBaseProvider } from "native-base";
import SingleProductScreen from "./src/Screens/SingleProductScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen />
    </NativeBaseProvider>
  );
}
