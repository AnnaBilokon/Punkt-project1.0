import { View, Text } from "react-native";

export default function StarRating({ rating }: { rating: number }) {
  // Round or floor to an integer number of stars
  const count = Math.floor(rating);

  // Build a string of stars, e.g. '⭐⭐⭐⭐'
  const stars = "⭐".repeat(count);

  return <Text className="text-yellow-400 text-xs m-2">{stars}</Text>;
}
