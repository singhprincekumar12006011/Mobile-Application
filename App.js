import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import ContextProvider from "./context/ShopContext";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
}
