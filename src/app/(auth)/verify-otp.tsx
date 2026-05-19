import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';

export default function VerifyOTPScreen() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    router.push('/(auth)/username');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <View className="flex-1 justify-center px-6">
          <View className="mb-10 items-center">
            <Text className="font-space text-3xl font-bold text-noxis-text">Verify code</Text>
            <Text className="mt-2 text-center font-inter text-sm text-noxis-muted">
              Enter the verification code sent to your email
            </Text>
          </View>

          <GlassCard className="items-center p-8">
            <View className="mb-8 flex-row gap-3">
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => { inputs.current[index] = ref; }}
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 text-center font-space text-xl text-noxis-text"
                />
              ))}
            </View>

            <Button title="Verify" onPress={handleVerify} className="w-full" />

            <TouchableOpacity className="mt-4">
              <Text className="font-inter text-sm text-noxis-accent">Resend code</Text>
            </TouchableOpacity>
          </GlassCard>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
