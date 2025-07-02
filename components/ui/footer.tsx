import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View className='fixed w-full bottom-0 left-0 px-6 py-4 bg-white border-t border-orange-200'>
      <Text className='relative text-base leading-none text-orange-900 text-center'>
        &copy; Copyright 2025
      </Text>
    </View>
  );
}