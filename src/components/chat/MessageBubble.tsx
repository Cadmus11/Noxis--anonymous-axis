import { View, Text } from 'react-native';

interface MessageBubbleProps {
  content: string;
  timestamp: number;
  isMine: boolean;
  isAnonymous?: boolean;
}

export const MessageBubble = ({ content, timestamp, isMine, isAnonymous }: MessageBubbleProps) => {
  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View className={`mb-2 flex-row ${isMine ? 'justify-end' : 'justify-start'}`}>
      <View
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isMine
            ? 'rounded-br-sm bg-noxis-primary'
            : 'rounded-bl-sm border border-white/10 bg-white/5'
        }`}>
        {isAnonymous && !isMine && (
          <Text className="mb-1 font-inter text-xs text-noxis-accent">Anonymous</Text>
        )}
        <Text className="font-inter text-base leading-5 text-noxis-text">{content}</Text>
        <Text
          className={`mt-1 text-right font-inter text-[10px] ${
            isMine ? 'text-white/60' : 'text-noxis-muted'
          }`}>
          {time}
        </Text>
      </View>
    </View>
  );
};
