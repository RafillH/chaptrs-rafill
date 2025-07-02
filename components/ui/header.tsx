import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View className='fixed w-full top-0 left-0 px-6 py-4 bg-white border-b border-orange-200'>
      <Text className='text-2xl font-bold text-orange-900 text-center'>Rafill Chaptrs</Text>
      <Text className='text-base font-bold text-orange-900 text-center'>Coding challenge</Text>
    </View>
  );
}