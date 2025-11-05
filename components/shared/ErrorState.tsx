import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CText from '@/components/ui/CText';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Ionicons name="alert-circle-outline" size={64} color="#ef4444" />
        <CText variant="SemiBold" className="text-gray-900 text-xl text-center mt-4">
          Something went wrong
        </CText>
        <CText variant="Regular" className="text-gray-600 text-base text-center mt-2">
          {message}
        </CText>
        {onRetry && (
          <Pressable
            onPress={onRetry}
            className="bg-primary px-6 py-3 rounded-full mt-6 active:opacity-80"
          >
            <CText variant="SemiBold" className="text-white text-base">
              Try Again
            </CText>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ErrorState;
