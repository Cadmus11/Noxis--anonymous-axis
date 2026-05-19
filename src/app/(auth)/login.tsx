import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/home');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <View className="flex-1 justify-center px-6">
          <View className="mb-10 items-center">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-2xl bg-noxis-primary/20">
              <Text className="font-space text-3xl font-bold text-noxis-primary">N</Text>
            </View>
            <Text className="font-space text-4xl font-bold text-noxis-text">Welcome back</Text>
            <Text className="mt-2 font-inter text-sm text-noxis-muted">Enter the void</Text>
          </View>

          <GlassCard className="gap-4 p-6">
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              keyboardType="email-address"
              icon={<Ionicons name="mail-outline" size={18} color="#94A3B8" />}
            />

            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              icon={<Ionicons name="lock-closed-outline" size={18} color="#94A3B8" />}
            />

            <TouchableOpacity className="self-end">
              <Text className="font-inter text-sm text-noxis-accent">Forgot?</Text>
            </TouchableOpacity>

            <Button title="Sign In" onPress={handleLogin} className="mt-2" />

            <View className="flex-row items-center gap-4">
              <View className="h-[1px] flex-1 bg-white/10" />
              <Text className="font-inter text-xs text-noxis-muted">OR</Text>
              <View className="h-[1px] flex-1 bg-white/10" />
            </View>

            <View className="flex-row justify-center gap-4">
              <TouchableOpacity
                onPress={() => handleSocialLogin('google')}
                className="h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Ionicons name="logo-google" size={20} color="#F8FAFC" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialLogin('apple')}
                className="h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Ionicons name="logo-apple" size={20} color="#F8FAFC" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialLogin('phone')}
                className="h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Ionicons name="call-outline" size={20} color="#F8FAFC" />
              </TouchableOpacity>
            </View>
          </GlassCard>

          <View className="mt-8 flex-row justify-center">
            <Text className="font-inter text-sm text-noxis-muted">No account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
              <Text className="font-inter text-sm font-bold text-noxis-primary">Create one</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
