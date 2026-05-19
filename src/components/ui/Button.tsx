import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  className = '',
  icon,
}: ButtonProps) => {
  const base = 'flex-row items-center justify-center rounded-2xl';
  const sizes = {
    sm: 'px-4 py-2.5',
    md: 'px-6 py-3.5',
    lg: 'px-8 py-4',
  };
  const variants = {
    primary: 'bg-noxis-primary',
    secondary: 'bg-noxis-accent',
    ghost: 'bg-white/5',
    outline: 'border border-noxis-primary bg-transparent',
  };
  const textSizes = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
  const textVariants = {
    primary: 'text-white',
    secondary: 'text-noxis-bg',
    ghost: 'text-noxis-text',
    outline: 'text-noxis-primary',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator color={variant === 'secondary' ? '#050816' : '#fff'} />
      ) : (
        <View className="flex-row items-center gap-2">
          {icon}
          <Text className={`${textSizes[size]} ${textVariants[variant]} font-satoshi font-bold`}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
