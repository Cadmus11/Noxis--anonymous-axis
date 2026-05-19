import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const EncryptedBadge = () => {
  return (
    <View className="flex-row items-center justify-center gap-1.5 py-2">
      <View className="h-1 w-1 rounded-full bg-green-500" />
      <Text className="font-inter text-[10px] font-medium uppercase tracking-widest text-green-500">
        Encrypted
      </Text>
      <Ionicons name="lock-closed" size={10} color="#10B981" />
    </View>
  );
};
