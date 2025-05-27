import { View, Text, ScrollView } from "react-native";
import React from "react";

function Bookshelf({ title }: any) {
  return (
    <View className="bg-box p-4 rounded-xl my-2 border border-box_border">
      <Text className="text-2xl font-bold text-dark-200 mb-5">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row justify-center items-center gap-6">
          <View className="border border-box_border w-[100px] h-[140px] rounded-md shadow"></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Bookshelf;
