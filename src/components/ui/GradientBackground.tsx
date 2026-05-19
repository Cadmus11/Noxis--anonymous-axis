import { View } from 'react-native';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <View className="flex-1 bg-noxis-bg">
      <View className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-noxis-primary/20 blur-3xl" />
      <View className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-noxis-accent/10 blur-3xl" />
      <View className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-noxis-secondary/10 blur-3xl" />
      {children}
    </View>
  );
};
