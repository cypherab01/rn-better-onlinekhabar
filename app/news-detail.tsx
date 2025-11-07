import ErrorState from "@/components/shared/ErrorState";
import LoadingState from "@/components/shared/LoadingState";
import CText from "@/components/ui/CText";
import { useParsedNews } from "@/queries/useParsedNews";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const NewsDetail = () => {
  const { url } = useLocalSearchParams();

  const { data, isLoading, error, refetch, isRefetching } = useParsedNews(
    url as string
  );

  if (isLoading) {
    return <LoadingState message="Loading news..." />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (!data?.ok || !data?.data) {
    return <ErrorState message="No news data available" />;
  }

  const newsData = data.data;

  return (
    <ScrollView
      className="flex-1 bg-white"
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    >
      {/* Hero Image */}
      {newsData.postThumbnail && (
        <Image
          source={{ uri: newsData.postThumbnail }}
          style={{ width, height: width * 0.6 }}
          resizeMode="cover"
          className="bg-gray-200"
        />
      )}

      <View className="px-5 py-6">
        {/* Title */}
        {newsData.title && (
          <CText
            variant="Bold"
            className="mb-4 text-[28px] leading-[38px] text-gray-900"
          >
            {newsData.title}
          </CText>
        )}

        {/* Metadata */}
        {(newsData.author || newsData.dateTime) && (
          <View className="flex-row items-center pb-5 mb-6 border-b border-gray-200">
            {newsData.author && (
              <CText variant="SemiBold" className="mr-3 text-sm text-blue-600">
                {newsData.author}
              </CText>
            )}
            {newsData.dateTime && (
              <CText variant="Regular" className="text-sm text-gray-500">
                {newsData.dateTime}
              </CText>
            )}
          </View>
        )}

        {/* AI Summaries */}
        {newsData.ai_summaries && newsData.ai_summaries.length > 0 && (
          <View className="p-5 mb-6 bg-blue-50 rounded-xl">
            <CText
              variant="SemiBold"
              className="mb-3 text-[17px] leading-[26px] text-blue-900"
            >
              📝 मुख्य बुँदाहरू
            </CText>
            {newsData.ai_summaries.map((summary, index) => (
              <View key={index} className="flex-row mb-3 last:mb-0">
                <CText
                  variant="Regular"
                  className="mr-3 text-[15px] text-blue-800"
                >
                  •
                </CText>
                <CText
                  variant="Regular"
                  className="flex-1 text-[15px] leading-[24px] text-blue-800"
                >
                  {summary}
                </CText>
              </View>
            ))}
          </View>
        )}

        {/* Excerpt */}
        {newsData.excerpt && (
          <CText
            variant="Medium"
            className="mb-6 text-[17px] leading-[28px] text-gray-700"
            style={{ fontStyle: "italic" }}
          >
            {newsData.excerpt}
          </CText>
        )}

        {/* News Description */}
        {newsData.newsDescription && newsData.newsDescription.length > 0 && (
          <View className="mb-6">
            {newsData.newsDescription.map((paragraph, index) => {
              // Skip empty paragraphs
              if (!paragraph || paragraph.trim() === "") {
                return null;
              }

              // Check if this paragraph is actually an image reference
              const imageMatch = newsData.images?.find((img) =>
                paragraph.includes(img.src)
              );

              if (imageMatch) {
                return (
                  <View key={index} className="my-5">
                    <Image
                      source={{ uri: imageMatch.src }}
                      style={{ width: width - 40, height: (width - 40) * 0.6 }}
                      resizeMode="cover"
                      className="bg-gray-200 rounded-xl"
                    />
                    {imageMatch.caption && (
                      <CText
                        variant="Regular"
                        className="px-2 mt-3 text-[13px] leading-[20px] text-center text-gray-500"
                        style={{ fontStyle: "italic" }}
                      >
                        {imageMatch.caption}
                      </CText>
                    )}
                  </View>
                );
              }

              return (
                <CText
                  key={index}
                  variant="Regular"
                  className="mb-5 text-[17px] leading-[30px] text-gray-800"
                >
                  {paragraph}
                </CText>
              );
            })}
          </View>
        )}

        {/* Images that weren't in description */}
        {newsData.images &&
          newsData.images.length > 0 &&
          newsData.images
            .filter(
              (img) =>
                !newsData.newsDescription ||
                !newsData.newsDescription.some((p) => p.includes(img.src))
            )
            .map((image, index) => (
              <View key={index} className="my-5">
                <Image
                  source={{ uri: image.src }}
                  style={{ width: width - 40, height: (width - 40) * 0.6 }}
                  resizeMode="cover"
                  className="bg-gray-200 rounded-xl"
                />
                {image.caption && (
                  <CText
                    variant="Regular"
                    className="px-2 mt-3 text-[13px] leading-[20px] text-center text-gray-500"
                    style={{ fontStyle: "italic" }}
                  >
                    {image.caption}
                  </CText>
                )}
              </View>
            ))}

        {/* Tags */}
        {newsData.postTags && newsData.postTags.length > 0 && (
          <View className="pt-6 mt-8 border-t border-gray-200">
            <CText
              variant="SemiBold"
              className="mb-4 text-[15px] text-gray-600"
            >
              ट्यागहरू
            </CText>
            <View className="flex-row flex-wrap">
              {newsData.postTags.map((tag, index) => (
                <View
                  key={index}
                  className="px-4 py-2 mr-2 mb-2 bg-gray-100 rounded-full"
                >
                  <CText
                    variant="Medium"
                    className="text-[13px] leading-[18px] text-gray-700"
                  >
                    #{tag}
                  </CText>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default NewsDetail;
