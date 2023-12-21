import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { Reg } from "./components/Reg";
import { Auth, setAndCheckCookies } from "./components/Auth";
import { Start } from "./components/Start";
import { Levels } from "./components/LevelsPage/Levels";
import { Rewards } from "./components/RewardsPage/Rewards";
import { Theory } from "./components/TheoryPage/Theory";
import { User } from "./components/User";
import { Theory1 } from "./components/TheoryPage/Theory1";
import { Level } from "./components/LevelsPage/Level";
import { Main } from "./components/Main";
import { Task } from "./components/Task";
import { SplashScreen } from "./components/Const";
import { LevelComplete } from "./components/LevelsPage/LevelComplete";
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

export default function App() { 
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthorized, setIsAuthorized] = React.useState(false);

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
          <Stack.Screen name="InitLevels" component={Main} />
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
        <Stack.Screen name="Theory1" component={Theory1} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="LevelComplete" component={LevelComplete} />
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
