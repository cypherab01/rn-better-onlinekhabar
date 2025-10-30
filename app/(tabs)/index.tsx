import { ListHeaderComponent } from "@/components/shared/ListHeaderComponent";
import CText from "@/components/ui/CText";
import { useLatestNews } from "@/queries/useLatestUpdates";
import { LatestNews } from "@/types/LatestNews";
import React from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Latest = () => {
  const { data, isLoading, error, refetch } = useLatestNews();

  if (isLoading)
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  if (error)
    return (
      <SafeAreaView>
        <Text>Error: {(error as Error).message}</Text>
      </SafeAreaView>
    );

  const renderItem = ({ item }: { item: LatestNews }) => (
    <View className="rounded-2xl">
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        className="rounded-t-2xl rounded-b-none w-full aspect-video object-cover"
      />
      <View className="p-2 border-x border-b border-gray-200/50 rounded-b-2xl">
        <CText className="text-primary font-bold text-3xl text-center my-1">
          {item.title}
        </CText>
        {/* <View className="bg-primary/10 rounded-full px-2 py-1 self-start">
          <CText className="text-primary text-sm">{item.nepali_date}</CText>
        </View> */}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 p-2 bg-white">
      <FlatList
        data={data}
        keyExtractor={(item) => item.link}
        renderItem={renderItem}
        ListHeaderComponent={() => ListHeaderComponent("Latest News")}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <CText className="text-primary font-bold text-3xl text-center">
              No latest news found
            </CText>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Latest;
