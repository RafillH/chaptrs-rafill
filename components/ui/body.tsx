import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { DemoApiService } from '../../lib/services';
import { Post as PostType } from '../../lib/types';
import { PostCard, PostCardSkeleton } from '../Post';

function EmptyResults() {
  return (
    <View className='flex-1 justify-center items-center px-8 gap-2'>
      <Text className='text-2xl font-bold'>No posts found</Text>
    </View>
  )
}

export default function Body() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostType[]>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setTimeout(async () => {
          const posts = await DemoApiService.getPosts();
          setPosts(posts);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // loading state
  if (loading) {
    return (
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}
        className='flex-1 p-6 pb-24 bg-orange-50 gap-4'>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </Animated.View>
    )
  }

  // error state
  if (!loading && isError) {
    return (
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}
        className='flex-1 justify-center items-center px-8 gap-2'>
        <Text className='text-2xl font-bold'>Oh no!</Text>
        <Text className='text-base text-neutral-500 text-center'>Something went wrong. Try refreshing or reloading the app</Text>
      </Animated.View>
    )
  }

  // success state
  return (
    <Animated.View
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(400)}
      className='flex-1'
    >
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        ItemSeparatorComponent={() => <View className='h-4' />}
        ListEmptyComponent={EmptyResults}
        keyExtractor={(item) => item.id.toString()}
        className='flex-1 p-6 pb-24 bg-orange-50'
        initialNumToRender={10}
      />
    </Animated.View>
  );
}
