import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GlassCard } from '../../components/ui/GlassCard';
import { Avatar } from '../../components/ui/Avatar';

const stories = [
  { name: 'Your Story', isMine: true },
  { name: 'Alex', avatar: '' },
  { name: 'Sam', avatar: '' },
  { name: 'Jordan', avatar: '' },
  { name: 'Riley', avatar: '' },
  { name: 'Casey', avatar: '' },
];

const trendingPosts = [
  {
    user: 'ghost_221',
    content: 'The void is calling... anyone else feel it tonight?',
    likes: 234,
    comments: 42,
    anonymous: true,
  },
  {
    user: 'astral',
    content:
      'Just built a neural network that generates cyberpunk cityscapes. Mind-blowing results.',
    likes: 892,
    comments: 156,
    anonymous: false,
  },
  {
    user: 'UnknownSoul',
    content: "Dropping this here because I can't say it anywhere else.",
    likes: 567,
    comments: 89,
    anonymous: true,
  },
];

export default function HomeScreen() {
  return (
    <GradientBackground>
      <View className="flex-1 pt-14">
        <View className="mb-4 flex-row items-center justify-between px-6">
          <Text className="font-space text-2xl font-bold text-noxis-text">NOXIS</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-24">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6 pl-6"
            contentContainerClassName="gap-3 pr-6">
            {stories.map((story, i) => (
              <TouchableOpacity key={i} className="items-center gap-1">
                <View
                  className={`rounded-full border-2 p-0.5 ${
                    story.isMine ? 'border-noxis-primary' : 'border-noxis-accent'
                  }`}>
                  <Avatar name={story.name} size="lg" />
                </View>
                <Text className="font-inter text-xs text-noxis-muted">{story.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="mb-4 px-6">
            <Text className="mb-3 font-satoshi text-lg font-bold text-noxis-text">Trending</Text>
            {trendingPosts.map((post, i) => (
              <GlassCard key={i} className="mb-3 p-4">
                <View className="mb-2 flex-row items-center gap-2">
                  <Avatar name={post.user} size="sm" />
                  <Text className="font-inter text-sm text-noxis-text">
                    {post.anonymous ? `Ghost_${Math.floor(Math.random() * 999)}` : post.user}
                  </Text>
                  {post.anonymous && (
                    <View className="rounded-full bg-noxis-accent/20 px-2 py-0.5">
                      <Text className="font-inter text-[10px] text-noxis-accent">Anonymous</Text>
                    </View>
                  )}
                </View>
                <Text className="mb-3 font-inter text-base leading-5 text-noxis-text">
                  {post.content}
                </Text>
                <View className="flex-row items-center gap-4">
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="heart-outline" size={16} color="#94A3B8" />
                    <Text className="font-inter text-xs text-noxis-muted">{post.likes}</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="chatbubble-outline" size={16} color="#94A3B8" />
                    <Text className="font-inter text-xs text-noxis-muted">{post.comments}</Text>
                  </View>
                </View>
              </GlassCard>
            ))}
          </View>
        </ScrollView>
      </View>
    </GradientBackground>
  );
}
