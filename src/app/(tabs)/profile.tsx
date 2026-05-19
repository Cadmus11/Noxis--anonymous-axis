import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GlassCard } from '../../components/ui/GlassCard';
import { Avatar } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { useAuthStore } from '../../store/authStore';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const stats = [
    { label: 'Posts', value: '12' },
    { label: 'Followers', value: '1.2k' },
    { label: 'Following', value: '89' },
  ];

  const menuItems = [
    { icon: 'shield-checkmark-outline' as const, label: 'Privacy', color: '#00E5FF' },
    { icon: 'lock-closed-outline' as const, label: 'Security', color: '#8B5CF6' },
    { icon: 'medal-outline' as const, label: 'Badges', color: '#EC4899' },
    { icon: 'settings-outline' as const, label: 'Settings', color: '#94A3B8' },
  ];

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <GradientBackground>
      <View className="flex-1 pt-14">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-6 pb-24">
          <GlassCard className="mb-6 items-center p-6">
            <Avatar name={user?.displayName || 'User'} size="xl" />
            <Text className="mt-3 font-satoshi text-xl font-bold text-noxis-text">
              {user?.displayName || 'User'}
            </Text>
            <Text className="font-inter text-sm text-noxis-accent">
              @{user?.username || 'username'}
            </Text>
            <Text className="mt-2 text-center font-inter text-sm text-noxis-muted">
              {user?.bio || 'No bio yet'}
            </Text>

            <View className="mt-6 flex-row gap-8">
              {stats.map((stat, i) => (
                <View key={i} className="items-center">
                  <Text className="font-satoshi text-lg font-bold text-noxis-text">
                    {stat.value}
                  </Text>
                  <Text className="font-inter text-xs text-noxis-muted">{stat.label}</Text>
                </View>
              ))}
            </View>
          </GlassCard>

          <View className="gap-3">
            {menuItems.map((item, i) => (
              <TouchableOpacity
                key={i}
                className="flex-row items-center rounded-2xl border border-white/10 bg-white/5 p-4"
                activeOpacity={0.7}>
                <View
                  className="h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${item.color}20` }}>
                  <Ionicons name={item.icon} size={20} color={item.color} />
                </View>
                <Text className="ml-3 flex-1 font-inter text-base text-noxis-text">
                  {item.label}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-8">
            <Button
              title="Logout"
              variant="ghost"
              onPress={handleLogout}
              className="border border-red-500/30"
            />
          </View>
        </ScrollView>
      </View>
    </GradientBackground>
  );
}
