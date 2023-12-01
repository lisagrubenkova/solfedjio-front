import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Reg } from "./components/Reg";
import { Auth, setAndCheckCookies } from "./components/Auth";
import { Start } from "./components/Start";
import { Levels } from "./components/Levels";
import { Level1 } from "./components/Level1";
import { Level2 } from "./components/Level2";
import { Level3 } from "./components/Level3";
import { Rewards } from "./components/Rewards";
import { Theory } from "./components/Theory";
import { User } from "./components/User";
import { Theory1 } from "./components/Theory1";
import { Level } from "./components/Level";
import { Main } from "./components/Main";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  const getIsAuthorized = async () => {
    try {
      await setAndCheckCookies(setIsAuthorized);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getIsAuthorized();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthorized ? (
          <Stack.Screen name="InitLevels" component={Levels} />
        ) : (
          <Stack.Screen name="InitStart" component={Start} />
        )}

        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Levels" component={Levels} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Theory" component={Theory} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
        <Stack.Screen name="Theory1" component={Theory1} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
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
