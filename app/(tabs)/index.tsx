import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";

import useFetch from "@/services/useFetch";
import { fetchBooks } from "@/services/api"; // Google Books API fetch function
import TabSwitcher from "@/components/TabSwitcher";
import { useBookshelves } from "@/services/useBookshelves";
import Bookshelf from "@/components/Bookshelf";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();
  const { shelves, createShelf } = useBookshelves();
  const [newShelfName, setNewShelfName] = useState("");

  const handleCreateShelf = () => {
    if (newShelfName.trim()) {
      createShelf(newShelfName.trim());
      setNewShelfName("");
    }
  };

  return (
    <View className="flex-1 bg-background">
      {/* <Image source={images.bg} className="absolute w-full h-full z-0" /> */}

      {/* Content */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-row justify-between ">
          <Text className="text-3xl text-dark-200 font-bold mt-8 mb-3">
            My Library
          </Text>
          <TouchableOpacity
            onPress={() => {}}
            className="bg-accent px-4 py-3 rounded-lg self-end mb-3"
          >
            <Feather name="plus" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row bg-box p-4 rounded-xl my-2 border border-box_border">
          <View className="">
            <Text className="text-2xl font-bold text-dark-200 mb-5">
              2025 Reading Challenge
            </Text>
            <Text className="text-4xl font-semibold text-accent mt-1 mb-5">
              12/25 books
            </Text>
            <Text className="text-3xl font-normal text-dark-200 mt-1 mb-5">
              Keep reading!
            </Text>
          </View>

          <View className="justify-center">
            <Image source={images.Chart} />
          </View>
        </View>

        <TabSwitcher />

        <View className="mb-6">
          <TextInput
            placeholder="Enter shelf name"
            value={newShelfName}
            onChangeText={setNewShelfName}
            className="bg-white rounded-xl px-4 py-3 text-black mb-3"
          />
          <TouchableOpacity
            onPress={handleCreateShelf}
            className="bg-accent py-3 rounded-xl"
          >
            <Text className="text-center text-white font-semibold">
              ➕ Create Bookshelf
            </Text>
          </TouchableOpacity>
        </View>

        {shelves.length === 0 ? (
          <Text className="text-gray-400 text-center">No bookshelves yet.</Text>
        ) : (
          shelves.map((shelf) => (
            <Bookshelf key={shelf.id} title={shelf.title} books={shelf.books} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
