import { create } from 'zustand';

interface TranscriptionState {
  audioFile: File | null;
  transcription: string;
  editedText: string;
  speakers: string[];
  isLoading: boolean;
  error: string | null;
  setAudioFile: (file: File | null) => void;
  setTranscription: (text: string) => void;
  setEditedText: (text: string) => void;
  setSpeakers: (speakers: string[]) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useTranscriptionStore = create<TranscriptionState>((set) => ({
  audioFile: null,
  transcription: '',
  editedText: '',
  speakers: [],
  isLoading: false,
  error: null,
  setAudioFile: (file) => set({ audioFile: file }),
  setTranscription: (text) => set({ transcription: text }),
  setEditedText: (text) => set({ editedText: text }),
  setSpeakers: (speakers) => set({ speakers }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
