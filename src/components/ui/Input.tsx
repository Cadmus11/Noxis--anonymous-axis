import { TextInput, Text, View } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  multiline,
  className = '',
  icon,
}: InputProps) => {
  return (
    <View className={`gap-1.5 ${className}`}>
      {label && <Text className="font-inter text-sm font-medium text-noxis-text">{label}</Text>}
      <View className="flex-row items-center rounded-2xl border border-white/10 bg-white/5 px-4">
        {icon && <View className="mr-3">{icon}</View>}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          className="flex-1 py-3.5 font-inter text-base text-noxis-text"
        />
      </View>
      {error && <Text className="font-inter text-xs text-red-400">{error}</Text>}
    </View>
  );
};
