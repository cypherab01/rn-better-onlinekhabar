import CText from "@/components/ui/CText";
import React from "react";
import { Image, Pressable, View } from "react-native";

interface NewsCardProps {
  title: string;
  image: string;
  date?: string;
  category?: string;
  onPress: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  image,
  date,
  category,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="overflow-hidden bg-white rounded-2xl shadow-sm active:opacity-80"
    >
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        className="w-full aspect-video"
      />
      <View className="p-4 border-b border-x border-gray-200/50">
        <CText
          variant="SemiBold"
          className="mb-2 text-lg leading-6 text-gray-900"
          numberOfLines={3}
        >
          {title}
        </CText>
        <View className="flex-row justify-between items-center">
          {category && (
            <View className="bg-primary/10 rounded-full px-3 py-1.5">
              <CText variant="Medium" className="text-xs text-primary">
                {category}
              </CText>
            </View>
          )}
          {date && (
            <CText variant="Regular" className="text-xs text-gray-500">
              {date}
            </CText>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default NewsCard;
