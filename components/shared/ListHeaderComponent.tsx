import CText from "@/components/ui/CText";
import { View } from "react-native";

export const ListHeaderComponent = (section: string) => (
  <View className="p-4 border-b border-gray-200">
    <CText className="text-4xl font-bold text-center text-primary">
      {section}
    </CText>
  </View>
);
