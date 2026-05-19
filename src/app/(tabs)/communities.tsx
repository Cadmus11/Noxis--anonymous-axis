import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GlassCard } from '../../components/ui/GlassCard';

const communities = [
  {
    name: 'AI BUILDERS',
    members: '34k',
    description: 'Building the future with artificial intelligence',
    topics: ['LLMs', 'Computer Vision', 'AI Agents'],
    online: 128,
    color: '#8B5CF6',
  },
  {
    name: 'ANIME REALM',
    members: '28k',
    description: 'Everything anime, manga, and otaku culture',
    topics: ['Shonen', 'Slice of Life', 'Movies'],
    online: 95,
    color: '#EC4899',
  },
  {
    name: 'GAMING',
    members: '22k',
    description: 'Gamers unite. PC, console, mobile.',
    topics: ['FPS', 'RPG', 'Indie'],
    online: 203,
    color: '#F59E0B',
  },
  {
    name: 'PHILOSOPHY',
    members: '12k',
    description: 'Deep discussions about existence and meaning',
    topics: ['Ethics', 'Metaphysics', 'Logic'],
    online: 47,
    color: '#00E5FF',
  },
  {
    name: 'CRYPTO OGs',
    members: '19k',
    description: 'Blockchain, DeFi, Web3 discussions',
    topics: ['Bitcoin', 'Ethereum', 'NFTs'],
    online: 156,
    color: '#10B981',
  },
];

export default function CommunitiesScreen() {
  return (
    <GradientBackground>
      <View className="flex-1 pt-14">
        <View className="mb-6 px-6">
          <Text className="font-space text-2xl font-bold text-noxis-text">Communities</Text>
          <Text className="font-inter text-sm text-noxis-muted">Find your people</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-6 pb-24">
          {communities.map((c, i) => (
            <TouchableOpacity key={i} activeOpacity={0.7}>
              <GlassCard className="mb-3 overflow-hidden p-5">
                <View className="mb-3 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <View
                      className="h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${c.color}30` }}>
                      <Text className="font-space text-xl font-bold" style={{ color: c.color }}>
                        {c.name[0]}
                      </Text>
                    </View>
                    <View>
                      <Text className="font-satoshi font-bold text-noxis-text">{c.name}</Text>
                      <Text className="font-inter text-xs text-noxis-muted">
                        {c.members} members · {c.online} online
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
                </View>
                <Text className="mb-3 font-inter text-sm text-noxis-textSecondary">
                  {c.description}
                </Text>
                <View className="flex-row gap-2">
                  {c.topics.map((topic, j) => (
                    <View key={j} className="rounded-full bg-white/5 px-3 py-1">
                      <Text className="font-inter text-xs text-noxis-muted">{topic}</Text>
                    </View>
                  ))}
                </View>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GradientBackground>
  );
}
