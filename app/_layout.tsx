import ReactQueryProvider from "@/providers/ReactQueryProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,

    "Mukta-ExtraLight": require("../assets/fonts/Mukta-ExtraLight.ttf"),
    "Mukta-Light": require("../assets/fonts/Mukta-Light.ttf"),
    "Mukta-Regular": require("../assets/fonts/Mukta-Regular.ttf"),
    "Mukta-Medium": require("../assets/fonts/Mukta-Medium.ttf"),
    "Mukta-SemiBold": require("../assets/fonts/Mukta-SemiBold.ttf"),
    "Mukta-Bold": require("../assets/fonts/Mukta-Bold.ttf"),
    "Mukta-ExtraBold": require("../assets/fonts/Mukta-ExtraBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ReactQueryProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ReactQueryProvider>
  );
}
