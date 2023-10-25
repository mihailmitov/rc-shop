import {
  NavigationContainer,
  Theme,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import RootNavigator from "./src/screens/navigators/RootNavigator";
import { useMemo } from "react";

export default function App() {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
              text: "#fff",
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "#f5f5f5",
              text: "#191919",
              border: "#D9D9D9",
              primary: "#191919",
            },
          },
    [colorScheme]
  );
  
  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
