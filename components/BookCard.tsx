import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import StarRating from "./StarRating";

// Define the props based on Google Books API
export type BookCardProps = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
    averageRating?: number;
    ratingsCount?: number;
  };
};

const BookCard = ({ id, volumeInfo }: BookCardProps) => {
  const thumbnail = volumeInfo?.imageLinks?.thumbnail;
  const rating = volumeInfo?.averageRating;

  const handlePress = () => {
    router.push({
      pathname: "/book/[id]",
      params: {
        id,
        title: volumeInfo.title,
        author: volumeInfo.authors?.[0],
        image: thumbnail?.replace("http://", "https://"),
        rating: rating?.toString(),
        publishedDate: volumeInfo.publishedDate,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-[170px] h-[220px] border border-[#D9D9D9] rounded-md shadow-xs mb-4 mx-4"
    >
      <Image
        source={{
          uri: thumbnail
            ? thumbnail.replace("http://", "https://")
            : "https://placehold.co/600x400/1a1a1a/ffffff.png?text=No+Image",
        }}
        className="w-[60%] h-40 mx-auto"
        resizeMode="cover"
      />
      <View className="border-b border-box_border" />
      <Text
        numberOfLines={1}
        className="text-base font-lato font-medium text-dark-200 mt-2 ml-2"
      >
        {volumeInfo?.title}
      </Text>

      {volumeInfo?.authors && (
        <Text
          numberOfLines={1}
          className="text-sm font-lato text-dark-200 opacity-50 ml-2"
        >
          by {volumeInfo.authors.join(", ")}
        </Text>
      )}

      {rating != null && <StarRating rating={Number(rating)} />}
    </TouchableOpacity>
  );
};

export default BookCard;
