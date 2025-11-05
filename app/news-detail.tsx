import CText from "@/components/ui/CText";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const { url } = params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!url) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center">
          <CText variant="Medium" className="text-gray-600">
            No URL provided
          </CText>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* WebView */}
      <View className="flex-1">
        {loading && (
          <View className="absolute inset-0 z-10 justify-center items-center bg-white">
            <ActivityIndicator size="large" color="#2260bf" />
            <CText variant="Medium" className="mt-4 text-gray-600">
              Loading article...
            </CText>
          </View>
        )}

        {error ? (
          <View className="flex-1 justify-center items-center px-6">
            <Ionicons name="alert-circle-outline" size={64} color="#ef4444" />
            <CText
              variant="SemiBold"
              className="mt-4 text-xl text-center text-gray-900"
            >
              Failed to load article
            </CText>
            <Pressable
              onPress={() => {
                setError(false);
                setLoading(true);
              }}
              className="px-6 py-3 mt-6 rounded-full bg-primary active:opacity-80"
            >
              <CText variant="SemiBold" className="text-base text-white">
                Retry
              </CText>
            </Pressable>
          </View>
        ) : (
          <WebView
            source={{ uri: url as string }}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            startInLoadingState={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewsDetail;
