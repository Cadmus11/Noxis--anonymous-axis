import { Image, View, Text } from 'react-native';

interface AvatarProps {
  source?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  online?: boolean;
}

const sizeMap = {
  sm: { container: 'h-8 w-8', text: 'text-xs' },
  md: { container: 'h-12 w-12', text: 'text-base' },
  lg: { container: 'h-16 w-16', text: 'text-xl' },
  xl: { container: 'h-24 w-24', text: 'text-3xl' },
};

const dotSizeMap = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
  xl: 'h-4 w-4',
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const colors = ['#8B5CF6', '#00E5FF', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];

const getColor = (name: string) => colors[name.charCodeAt(0) % colors.length];

export const Avatar = ({ source, name, size = 'md', online }: AvatarProps) => {
  const dims = sizeMap[size];
  const dotDims = dotSizeMap[size];

  return (
    <View className="relative">
      {source ? (
        <Image source={{ uri: source }} className={`${dims.container} rounded-full`} />
      ) : (
        <View
          className={`${dims.container} items-center justify-center rounded-full`}
          style={{ backgroundColor: getColor(name) }}>
          <Text className={`${dims.text} font-satoshi font-bold text-white`}>
            {getInitials(name)}
          </Text>
        </View>
      )}
      {online !== undefined && (
        <View
          className={`${dotDims} absolute bottom-0 right-0 rounded-full border-2 border-noxis-bg ${
            online ? 'bg-green-500' : 'bg-gray-500'
          }`}
        />
      )}
    </View>
  );
};
