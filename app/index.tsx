import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure navigation runs only once and after mount
    const timeout = setTimeout(() => {
      router.replace("/Screens/onBoarding");
    }, 0);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Hi chammo 💕</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
