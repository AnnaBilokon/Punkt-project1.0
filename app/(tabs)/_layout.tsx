import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[110px] min-h-[48px] mt-5 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-6" />
    </View>
  );
}

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#F9F9F9",
          borderTopWidth: 1,
          borderTopColor: "#D9D9D9",
          borderRadius: 50,
          marginHorizontal: 16,
          paddingHorizontal: 22,
          marginBottom: 36,
          height: 58,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <TabIcon focused={focused} icon={icons.book} title="Library" />
          ),
        }}
      />

      <Tabs.Screen
        name="Discover"
        options={{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <TabIcon focused={focused} icon={icons.search} title="Discover" />
          ),
        }}
      />

      <Tabs.Screen
        name="Friends"
        options={{
          title: "Friends",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <TabIcon focused={focused} icon={icons.friends} title="Friends" />
          ),
        }}
      />

      <Tabs.Screen
        name="Chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <TabIcon focused={focused} icon={icons.envelope} title="Chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
