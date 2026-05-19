import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';

const suggestions = [
  '@nox',
  '@shadow',
  '@astral',
  '@voidwalker',
  '@cypher',
  '@echo',
  '@phantom',
  '@neon',
];

export default function UsernameScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [available, setAvailable] = useState<boolean | null>(null);

  const handleCheck = (text: string) => {
    setUsername(text);
    if (text.length >= 3) {
      setAvailable(text.length > 3);
    } else {
      setAvailable(null);
    }
  };

  const handleContinue = () => {
    router.push('/(auth)/profile-setup');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <View className="flex-1 justify-center px-6">
          <View className="mb-8 items-center">
            <Text className="font-space text-3xl font-bold text-noxis-text">Choose your name</Text>
            <Text className="mt-2 text-center font-inter text-sm text-noxis-muted">
              This will be your unique identity on NOXIS
            </Text>
          </View>

          <GlassCard className="gap-4 p-6">
            <View>
              <Input
                label="Username"
                value={username}
                onChangeText={handleCheck}
                placeholder="@username"
                autoCapitalize="none"
                icon={<Ionicons name="at-outline" size={18} color="#94A3B8" />}
              />
              {available === true && (
                <Text className="mt-1 font-inter text-xs text-green-400">Username available</Text>
              )}
              {available === false && (
                <Text className="mt-1 font-inter text-xs text-red-400">Username taken</Text>
              )}
            </View>

            <Text className="font-inter text-xs text-noxis-muted">Suggested usernames</Text>
            <View className="flex-row flex-wrap gap-2">
              {suggestions.map((s) => (
                <TouchableOpacity
                  key={s}
                  onPress={() => setUsername(s.replace('@', ''))}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <Text className="font-inter text-sm text-noxis-accent">{s}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Button
              title="Continue"
              onPress={handleContinue}
              disabled={!username || available === false}
              className="mt-2"
            />
          </GlassCard>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
