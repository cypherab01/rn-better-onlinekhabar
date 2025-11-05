import ReactQueryProvider from "@/providers/ReactQueryProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import "../styles/global.css";

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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) {
      throw error;
    }
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
      <StatusBar barStyle={"dark-content"} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="news-detail"
          options={{
            headerShown: false,
            presentation: "card",
            animation: "slide_from_right",
          }}
        />
      </Stack>
    </ReactQueryProvider>
  );
}
