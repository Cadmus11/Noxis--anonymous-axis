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

export default function RegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const handleRegister = () => {
    router.push('/(auth)/verify-otp');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          contentContainerClassName="flex-grow justify-center px-6 py-16"
          keyboardShouldPersistTaps="handled">
          <View className="mb-8 items-center">
            <Text className="font-space text-3xl font-bold text-noxis-text">Create account</Text>
            <Text className="mt-2 font-inter text-sm text-noxis-muted">Join the network</Text>
          </View>

          <GlassCard className="gap-4 p-6">
            <Input
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              placeholder="John Doe"
              icon={<Ionicons name="person-outline" size={18} color="#94A3B8" />}
            />

            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              keyboardType="email-address"
              icon={<Ionicons name="mail-outline" size={18} color="#94A3B8" />}
            />

            <Input
              label="Phone (optional)"
              value={phone}
              onChangeText={setPhone}
              placeholder="+1 234 567 890"
              keyboardType="phone-pad"
              icon={<Ionicons name="call-outline" size={18} color="#94A3B8" />}
            />

            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              icon={<Ionicons name="lock-closed-outline" size={18} color="#94A3B8" />}
            />

            <Button title="Create Account" onPress={handleRegister} className="mt-2" />
          </GlassCard>

          <View className="mt-8 flex-row justify-center">
            <Text className="font-inter text-sm text-noxis-muted">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text className="font-inter text-sm font-bold text-noxis-primary">Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
