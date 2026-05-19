import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GlassCard } from '../../components/ui/GlassCard';

const suggestedCommunities = [
  { name: 'AI Builders', members: '34k', color: '#8B5CF6' },
  { name: 'Anime Realm', members: '28k', color: '#EC4899' },
  { name: 'Crypto OGs', members: '19k', color: '#F59E0B' },
  { name: 'Philosophy', members: '12k', color: '#00E5FF' },
];

const trendingUsers = [
  { username: 'nox', followers: '45.2k', bio: 'Building the future' },
  { username: 'astral', followers: '32.1k', bio: 'Digital artist' },
  { username: 'voidwalker', followers: '28.7k', bio: 'Exploring the unknown' },
];

export default function DiscoverScreen() {
  return (
    <GradientBackground>
      <View className="flex-1 pt-14">
        <View className="mb-6 px-6">
          <Text className="mb-1 font-space text-2xl font-bold text-noxis-text">Discover</Text>
          <Text className="font-inter text-sm text-noxis-muted">Find your tribe</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-24 px-6">
          <View className="mb-6 flex-row items-center rounded-2xl border border-white/10 bg-white/5 px-4">
            <Ionicons name="search" size={18} color="#94A3B8" />
            <TextInput
              placeholder="Search usernames, communities..."
              placeholderTextColor="#94A3B8"
              className="flex-1 py-3.5 font-inter text-base text-noxis-text"
            />
          </View>

          <Text className="mb-3 font-satoshi text-lg font-bold text-noxis-text">Communities</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6"
            contentContainerClassName="gap-3">
            {suggestedCommunities.map((c, i) => (
              <GlassCard key={i} className="w-44 p-4">
                <View
                  className="mb-3 h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${c.color}30` }}>
                  <Text className="font-space text-lg font-bold" style={{ color: c.color }}>
                    {c.name[0]}
                  </Text>
                </View>
                <Text className="mb-1 font-satoshi font-bold text-noxis-text">{c.name}</Text>
                <Text className="font-inter text-xs text-noxis-muted">{c.members} members</Text>
              </GlassCard>
            ))}
          </ScrollView>

          <Text className="mb-3 font-satoshi text-lg font-bold text-noxis-text">
            Trending Users
          </Text>
          {trendingUsers.map((user, i) => (
            <TouchableOpacity
              key={i}
              className="mb-2 flex-row items-center rounded-2xl border border-white/10 bg-white/5 p-4"
              activeOpacity={0.7}>
              <View className="h-12 w-12 items-center justify-center rounded-full bg-noxis-primary/30">
                <Text className="font-space text-lg font-bold text-noxis-primary">@</Text>
              </View>
              <View className="ml-3 flex-1">
                <Text className="font-satoshi font-bold text-noxis-text">@{user.username}</Text>
                <Text className="font-inter text-xs text-noxis-muted">
                  {user.bio} · {user.followers} followers
                </Text>
              </View>
              <TouchableOpacity className="rounded-xl border border-noxis-primary px-4 py-1.5">
                <Text className="font-inter text-xs font-bold text-noxis-primary">Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GradientBackground>
  );
}
