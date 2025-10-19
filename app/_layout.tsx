import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import HeaderAnimated from "@/components/HeaderAnimated";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Initial Index Screen */}
        <Stack.Screen
          name="Index"
          options={{
            headerShown: false,
          }}
        />

        {/* Modal Example */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            title: "Modal",
          }}
        />

        {/* Onboarding Screen with custom header */}
        <Stack.Screen
          name="Screens/onBoarding"
          options={{
            header: () => <HeaderAnimated HeaderTitle="Welcome 👋"
            
            />,
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
