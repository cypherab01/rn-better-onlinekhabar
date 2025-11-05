import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CText from '@/components/ui/CText';

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#2260bf" />
        <CText variant="Medium" className="text-gray-600 text-base mt-4">
          {message}
        </CText>
      </View>
    </SafeAreaView>
  );
};

export default LoadingState;
