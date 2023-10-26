import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Reg } from "./components/Reg";
import { Auth } from "./components/Auth";
import { Start } from "./components/Start";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Проект "Сольфеджио"' }}
        />
        <Stack.Screen
          name="Reg"
          component={Reg}
          options={{ title: "Регистрация" }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Вход" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
