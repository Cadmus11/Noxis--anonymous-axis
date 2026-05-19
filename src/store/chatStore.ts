import { create } from 'zustand';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: number;
  isMine: boolean;
}

interface Chat {
  id: string;
  participants: string[];
  name: string;
  avatar?: string;
  lastMessage?: string;
  lastMessageTime?: number;
  isAnonymous: boolean;
  unread: number;
  isOnline?: boolean;
}

interface ChatState {
  chats: Chat[];
  messages: Record<string, Message[]>;
  setChats: (chats: Chat[]) => void;
  setMessages: (chatId: string, messages: Message[]) => void;
  addMessage: (chatId: string, message: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  messages: {},
  setChats: (chats) => set({ chats }),
  setMessages: (chatId, messages) =>
    set((state) => ({ messages: { ...state.messages, [chatId]: messages } })),
  addMessage: (chatId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] || []), message],
      },
    })),
}));
