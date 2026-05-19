import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';

const interests = [
  'AI',
  'Anime',
  'Gaming',
  'Crypto',
  'Programming',
  'Music',
  'Philosophy',
  'Dark Humor',
  'Art',
  'Science',
  'Movies',
  'Fitness',
  'Books',
  'Design',
  'Startups',
];

export default function ProfileSetupScreen() {
  const router = useRouter();
  const [bio, setBio] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleComplete = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          contentContainerClassName="flex-grow px-6 py-16"
          keyboardShouldPersistTaps="handled">
          <View className="mb-8 items-center">
            <Text className="font-space text-3xl font-bold text-noxis-text">Set up profile</Text>
            <Text className="mt-2 font-inter text-sm text-noxis-muted">Make it yours</Text>
          </View>

          <GlassCard className="mb-6 items-center p-6">
            <TouchableOpacity className="mb-4 h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-noxis-primary/50">
              <Ionicons name="camera-outline" size={32} color="#8B5CF6" />
            </TouchableOpacity>
            <Text className="font-inter text-sm text-noxis-muted">Add a profile photo</Text>
          </GlassCard>

          <GlassCard className="mb-6 gap-4 p-6">
            <Input
              label="Bio"
              value={bio}
              onChangeText={setBio}
              placeholder="Tell the world about yourself..."
              multiline
            />
          </GlassCard>

          <GlassCard className="mb-6 p-6">
            <Text className="mb-4 font-inter text-sm font-medium text-noxis-text">
              Pick your interests
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {interests.map((interest) => {
                const selected = selectedInterests.includes(interest);
                return (
                  <TouchableOpacity
                    key={interest}
                    onPress={() => toggleInterest(interest)}
                    className={`rounded-xl border px-4 py-2 ${
                      selected
                        ? 'border-noxis-primary bg-noxis-primary/20'
                        : 'border-white/10 bg-white/5'
                    }`}>
                    <Text
                      className={`font-inter text-sm ${
                        selected ? 'text-noxis-primary' : 'text-noxis-muted'
                      }`}>
                      {interest}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </GlassCard>

          <Button title="Enter NOXIS" onPress={handleComplete} />
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
