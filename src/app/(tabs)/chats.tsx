import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { ChatListItem } from '../../components/chat/ChatListItem';

interface MockChat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: number;
  unread: number;
  isOnline: boolean;
  isAnonymous: boolean;
}

const mockChats: MockChat[] = [
  {
    id: '1',
    name: 'Alex',
    lastMessage: 'Hey, are you joining the AI meetup tonight?',
    timestamp: Date.now() - 300000,
    unread: 2,
    isOnline: true,
    isAnonymous: false,
  },
  {
    id: '2',
    name: 'Ghost_992',
    lastMessage: 'Want to join the philosophy room?',
    timestamp: Date.now() - 3600000,
    unread: 0,
    isOnline: false,
    isAnonymous: true,
  },
  {
    id: '3',
    name: 'Astral',
    lastMessage: 'Check out this new track I made 🎵',
    timestamp: Date.now() - 7200000,
    unread: 5,
    isOnline: true,
    isAnonymous: false,
  },
  {
    id: '4',
    name: 'Unknown Echo',
    lastMessage: 'Some secrets are meant to stay hidden...',
    timestamp: Date.now() - 86400000,
    unread: 1,
    isOnline: false,
    isAnonymous: true,
  },
  {
    id: '5',
    name: 'Design Team',
    lastMessage: 'New mockups are ready for review',
    timestamp: Date.now() - 172800000,
    unread: 0,
    isOnline: false,
    isAnonymous: false,
  },
];

export default function ChatsScreen() {
  const router = useRouter();

  return (
    <GradientBackground>
      <View className="flex-1 pt-14">
        <View className="mb-4 flex-row items-center justify-between px-6">
          <Text className="font-space text-2xl font-bold text-noxis-text">Chats</Text>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
            <Ionicons name="create-outline" size={20} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        <View className="mx-6 mb-4 flex-row gap-2">
          <TouchableOpacity className="rounded-full border border-noxis-primary/50 bg-noxis-primary/10 px-4 py-2">
            <Text className="font-inter text-xs font-bold text-noxis-primary">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Text className="font-inter text-xs text-noxis-muted">Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Text className="font-inter text-xs text-noxis-muted">Anonymous</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Text className="font-inter text-xs text-noxis-muted">Groups</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-24">
          {mockChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              name={chat.name}
              avatar={chat.avatar}
              lastMessage={chat.lastMessage}
              timestamp={chat.timestamp}
              unread={chat.unread}
              isOnline={chat.isOnline}
              isAnonymous={chat.isAnonymous}
              onPress={() => router.push(`/chat/${chat.id}`)}
            />
          ))}
        </ScrollView>
      </View>
    </GradientBackground>
  );
}
