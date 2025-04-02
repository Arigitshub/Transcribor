import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AudioUpload from './components/AudioUpload';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import TextEditor from './components/TextEditor';
import SpeakerIdentification from './components/SpeakerIdentification';
import ExportOptions from './components/ExportOptions';
import { useTranscriptionStore } from './store';
import { FileAudio2 } from 'lucide-react';

function App() {
  const { 
    transcription, 
    editedText, 
    speakers, 
    isLoading, 
    error,
    setTranscription,
    setEditedText,
    setSpeakers,
    setIsLoading,
    setError
  } = useTranscriptionStore();

  const handleUpload = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate transcription process
      setTranscription('Transcribing audio...');
      setSpeakers(['Speaker 1', 'Speaker 2']);

      // Simulate API call
      setTimeout(() => {
        const sampleText = `This is a sample transcription. It includes multiple sentences. We can also add more sentences to test the editor. And even more sentences to test the editor.`;
        setTranscription(sampleText);
        setEditedText(sampleText);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to process audio file');
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FileAudio2 className="h-12 w-12 mr-2 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Audio Transcription</h1>
        </motion.div>

        <AudioUpload onUpload={handleUpload} />

        {isLoading && (
          <motion.div
            className="mt-8 p-4 bg-blue-50 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-blue-600">Processing audio...</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mt-8 p-4 bg-red-50 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-red-600">{error}</p>
          </motion.div>
        )}

        {transcription && !isLoading && (
          <motion.div 
            className="mt-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TranscriptionDisplay transcription={transcription} />
            <TextEditor initialText={editedText} />
            <SpeakerIdentification speakers={speakers} />
            <ExportOptions text={editedText} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default App;
