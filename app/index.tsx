import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
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
      <ThemedView>
        <ThemedText>Hi chammo 💕</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Index;
