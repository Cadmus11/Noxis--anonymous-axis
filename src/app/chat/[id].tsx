import { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { MessageBubble } from '../../components/chat/MessageBubble';
import { EncryptedBadge } from '../../components/chat/EncryptedBadge';
import { useChatStore } from '../../store/chatStore';
import type { Message } from '../../store/chatStore';

const mockMessages: Message[] = [
  {
    id: '1',
    chatId: '1',
    senderId: 'other',
    content: 'Hey... Want to join the philosophy room?',
    timestamp: Date.now() - 600000,
    isMine: false,
  },
  {
    id: '2',
    chatId: '1',
    senderId: 'me',
    content: "Sounds interesting. What's the topic tonight?",
    timestamp: Date.now() - 500000,
    isMine: true,
  },
  {
    id: '3',
    chatId: '1',
    senderId: 'other',
    content: "We're discussing the nature of consciousness. It's been intense.",
    timestamp: Date.now() - 400000,
    isMine: false,
  },
  {
    id: '4',
    chatId: '1',
    senderId: 'other',
    content: "Some of the takes are wild. You'd love it.",
    timestamp: Date.now() - 350000,
    isMine: false,
  },
  {
    id: '5',
    chatId: '1',
    senderId: 'me',
    content: 'Count me in. Send the link.',
    timestamp: Date.now() - 200000,
    isMine: true,
  },
];

const chatNames: Record<string, string> = {
  '1': 'Ghost_992',
  '2': 'Alex',
  '3': 'Astral',
  '4': 'Unknown Echo',
  '5': 'Design Team',
};

export default function ChatRoomScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [message, setMessage] = useState('');
  const scrollRef = useRef<ScrollView>(null);
  const { messages, setMessages, addMessage } = useChatStore();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && id) {
      initialized.current = true;
      setMessages(id, mockMessages);
    }
  }, [id, setMessages]);

  const chatMessages = id ? messages[id] || [] : [];
  const chatName = id ? chatNames[id] || 'Chat' : 'Chat';
  const isAnonymous = id === '1' || id === '4';

  const handleSend = () => {
    if (!message.trim() || !id) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      chatId: id,
      senderId: 'me',
      content: message.trim(),
      timestamp: Date.now(),
      isMine: true,
    };
    addMessage(id, newMsg);
    setMessage('');
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <View className="flex-row items-center border-b border-white/10 bg-white/5 px-4 pb-3 pt-14">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <Ionicons name="chevron-back" size={22} color="#F8FAFC" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="font-satoshi font-bold text-noxis-text">{chatName}</Text>
            {isAnonymous && (
              <Text className="font-inter text-xs text-noxis-accent">Anonymous chat</Text>
            )}
          </View>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <Ionicons name="ellipsis-vertical" size={20} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        <EncryptedBadge />

        <ScrollView
          ref={scrollRef}
          className="flex-1 px-4"
          contentContainerClassName="py-4"
          onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: false })}>
          {chatMessages.length === 0 ? (
            <View className="flex-1 items-center justify-center py-20">
              <Text className="font-inter text-sm text-noxis-muted">
                No messages yet. Start a conversation.
              </Text>
            </View>
          ) : (
            chatMessages.map((msg) => (
              <MessageBubble
                key={msg.id}
                content={msg.content}
                timestamp={msg.timestamp}
                isMine={msg.isMine}
                isAnonymous={isAnonymous && !msg.isMine}
              />
            ))
          )}
        </ScrollView>

        <View className="flex-row items-center border-t border-white/10 bg-white/5 px-4 py-3 pb-8">
          <TouchableOpacity className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <Ionicons name="add" size={22} color="#94A3B8" />
          </TouchableOpacity>
          <View className="flex-1 flex-row items-center rounded-2xl border border-white/10 bg-white/5 px-4">
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Message..."
              placeholderTextColor="#94A3B8"
              className="flex-1 py-2.5 font-inter text-base text-noxis-text"
              multiline
            />
            <TouchableOpacity className="ml-2">
              <Ionicons name="mic-outline" size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleSend}
            className="ml-2 h-10 w-10 items-center justify-center rounded-xl bg-noxis-primary">
            <Ionicons name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}
