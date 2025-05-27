import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import useFetch from "@/services/useFetch";
import { fetchBooks } from "@/services/api"; // you already have this

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: books = [],
    loading,
    error,
    refetch,
    reset,
  } = useFetch(() => fetchBooks({ query: searchQuery }), false);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        refetch();
      } else {
        reset();
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-background">
      {/* <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      /> */}

      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full flex-row justify-center mt-20 items-center">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        {/* Search input */}
        <View className="my-5 text-base">
          <SearchBar
            placeholder="Search for a book"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Status messages */}
        {loading && (
          <ActivityIndicator size="large" color="#007AFF" className="my-3" />
        )}
        {error && (
          <Text className="text-red-500 text-center px-5 my-3">
            Error: {error.message}
          </Text>
        )}
        {!loading &&
          !error &&
          searchQuery.trim() &&
          books &&
          books.length > 0 && (
            <Text className="text-dark-200 text-xl font-bold mb-3">
              Results for <Text className="text-accent">{searchQuery}</Text>
            </Text>
          )}

        {/* Book list */}
        <FlatList
          data={books}
          renderItem={({ item }) => <BookCard {...item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 16,
          }}
          scrollEnabled={false}
          ListEmptyComponent={
            !loading && searchQuery.trim() ? (
              <Text className="text-center text-gray-400 mt-10">
                No books found.
              </Text>
            ) : null
          }
        />
      </ScrollView>
    </View>
  );
}
