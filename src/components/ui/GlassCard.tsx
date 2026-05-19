import { View } from 'react-native';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <View
      className={`rounded-3xl border border-white/10 bg-white/5 ${className}`}>
      {children}
    </View>
  );
};
