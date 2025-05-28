import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function BookCardOpenLibrary({ book }: { book: any }) {
  return (
    <Link href={`/book/${book.key}`} asChild>
      <TouchableOpacity className="w-[45%] mb-4">
        <Image
          source={{ uri: book.cover }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text numberOfLines={2} className="text-white font-bold mt-2 text-sm">
          {book.title}
        </Text>
        {book.authors && (
          <Text className="text-gray-300 text-xs mt-1" numberOfLines={1}>
            {book.authors.join(", ")}
          </Text>
        )}
      </TouchableOpacity>
    </Link>
  );
}
