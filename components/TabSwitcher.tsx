import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Bookshelf from "./Bookshelf";

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <View className="py-4">
      {/* Tabs */}
      <View className="flex-row mb-4">
        <TouchableOpacity
          className={`flex-1 py-4 rounded-l-lg ${
            activeTab === "tab1"
              ? "bg-greenAccent"
              : "bg-box border border-box_border"
          }`}
          onPress={() => setActiveTab("tab1")}
        >
          <Text
            className={`text-center font-semibold ${
              activeTab === "tab1" ? "text-white" : "text-dark-200"
            }`}
          >
            Bookshelves
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-4 rounded-r-lg ${
            activeTab === "tab2"
              ? "bg-greenAccent text-white"
              : "bg-box border border-box_border text-dark-200"
          }`}
          onPress={() => setActiveTab("tab2")}
        >
          <Text
            className={`text-center font-semibold ${
              activeTab === "tab2" ? "text-white" : "text-dark-200"
            }`}
          >
            Book Clubs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === "tab1" ? (
        <>
          <Bookshelf title="Want to Read" />
          <Bookshelf title="Read Already" />
          <Bookshelf title="Haven't Finished" />
        </>
      ) : (
        <View className="bg-green-100 p-4 rounded-xl">
          <Text className="text-green-800">This is content for Tab 2</Text>
        </View>
      )}
    </View>
  );
}
