import ErrorState from "@/components/shared/ErrorState";
import { ListHeaderComponent } from "@/components/shared/ListHeaderComponent";
import LoadingState from "@/components/shared/LoadingState";
import NewsCard from "@/components/shared/NewsCard";
import CText from "@/components/ui/CText";
import { useLatestNews } from "@/queries/useLatestUpdates";
import { LatestNews } from "@/types/LatestNews";
import { router } from "expo-router";
import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmptyComponent = () => (
  <View className="flex-1 justify-center items-center py-20">
    <CText variant="Medium" className="text-base text-gray-500">
      No latest news found
    </CText>
  </View>
);

const Latest = () => {
  const { data, isLoading, error, refetch } = useLatestNews();

  if (isLoading) {
    return <LoadingState message="Loading latest news..." />;
  }

  if (error) {
    return (
      <ErrorState
        message={(error as Error).message}
        onRetry={() => refetch()}
      />
    );
  }

  const handleNewsPress = (item: LatestNews) => {
    router.push({
      pathname: "/news-detail",
      params: {
        url: item.link,
      },
    });
  };

  const renderItem = ({ item }: { item: LatestNews }) => (
    <NewsCard
      title={item.title}
      image={item.image}
      date={item.nepali_date}
      onPress={() => handleNewsPress(item)}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={["top"]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.link}
        renderItem={renderItem}
        ListHeaderComponent={() => ListHeaderComponent("Latest News")}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            colors={["#2260bf"]}
            tintColor="#2260bf"
          />
        }
        ItemSeparatorComponent={() => <View className="h-4" />}
        ListEmptyComponent={EmptyComponent}
        className="px-4"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Latest;
