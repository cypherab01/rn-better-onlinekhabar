import CText from "@/components/ui/CText";
import { Colors } from "@/constants/Colors";
import { useLatestNews } from "@/queries/useLatestUpdates";
import { LatestNews } from "@/types/LatestNews";
import React from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Latest = () => {
  const { data, isLoading, error, refetch } = useLatestNews();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {(error as Error).message}</Text>;

  const renderItem = ({ item }: { item: LatestNews }) => (
    <View style={styles.newsContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.newsImage}
        resizeMode="cover"
      />
      <CText style={styles.newsTitle}>{item.title}</CText>
    </View>
  );

  // const listHeaderComponent = () => (
  //   <View style={styles.listHeaderContainer}>
  //     <CText style={styles.listHeaderTitle}>Latest News</CText>
  //   </View>
  // );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.link}
        renderItem={renderItem}
        // ListHeaderComponent={listHeaderComponent}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </SafeAreaView>
  );
};

export default Latest;

const styles = StyleSheet.create({
  newsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  newsTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.primary,
  },

  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  listHeaderContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
