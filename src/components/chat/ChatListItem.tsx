import { TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from '../ui/Avatar';

interface ChatListItemProps {
  name: string;
  avatar?: string;
  lastMessage?: string;
  timestamp?: number;
  unread: number;
  isOnline?: boolean;
  isAnonymous?: boolean;
  onPress: () => void;
}

export const ChatListItem = ({
  name,
  avatar,
  lastMessage,
  timestamp,
  unread,
  isOnline,
  isAnonymous,
  onPress,
}: ChatListItemProps) => {
  const time = timestamp
    ? new Date(timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center px-4 py-3 active:opacity-70"
      activeOpacity={0.7}>
      <Avatar name={isAnonymous ? '?' : name} source={avatar} size="md" online={isOnline} />
      <View className="ml-3 flex-1">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Text className="font-satoshi font-bold text-noxis-text">{name}</Text>
            {isAnonymous && (
              <View className="rounded-full bg-noxis-accent/20 px-2 py-0.5">
                <Text className="font-inter text-[10px] text-noxis-accent">Ghost</Text>
              </View>
            )}
          </View>
          <Text className="font-inter text-xs text-noxis-muted">{time}</Text>
        </View>
        {lastMessage && (
          <Text className="mt-0.5 font-inter text-sm text-noxis-muted" numberOfLines={1}>
            {lastMessage}
          </Text>
        )}
      </View>
      {unread > 0 && (
        <View className="-mt-6 ml-2 h-5 min-w-[20px] items-center justify-center rounded-full bg-noxis-primary px-1.5">
          <Text className="font-inter text-[10px] font-bold text-white">
            {unread > 99 ? '99+' : unread}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
