import { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 2500);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-noxis-bg">
      <Animated.View style={{ opacity }} className="items-center">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-3xl bg-noxis-primary/20">
          <Text className="font-space text-4xl font-bold text-noxis-primary">N</Text>
        </View>
        <Text className="font-space text-5xl font-bold tracking-widest text-noxis-text">NOXIS</Text>
        <Text className="mt-2 font-inter text-sm text-noxis-muted">Beyond the veil</Text>
      </Animated.View>
    </View>
  );
}
