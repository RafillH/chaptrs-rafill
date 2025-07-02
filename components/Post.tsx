import { View, Text } from "react-native";
import { Post } from "../lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <View className="relative flex flex-col gap-2 rounded-2xl bg-white shadow-sm p-6">
      <Text className="text-2xl font-bold">{post.title}</Text>
      <Text className="text-sm text-neutral-500">{post.body}</Text>
    </View>
  );
}

export function PostCardSkeleton() {
  return (
    <View className="relative flex flex-col gap-2 rounded-2xl bg-white shadow-sm p-6">
      <View className="h-6 w-1/2 bg-gray-200 rounded-full animate-pulse" />
      <View className="h-6 w-3/4 bg-gray-200 rounded-full animate-pulse" />
      <View className="h-3 w-3/4 bg-gray-200 rounded-full animate-pulse" />
      <View className="h-3 w-full bg-gray-200 rounded-full animate-pulse" />
      <View className="h-3 w-full bg-gray-200 rounded-full animate-pulse" />
    </View>
  );
}