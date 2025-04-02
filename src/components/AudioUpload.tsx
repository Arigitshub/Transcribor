import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { useTranscriptionStore } from '../store';

interface AudioUploadProps {
  onUpload: (file: File) => void;
}

const AudioUpload: React.FC<AudioUploadProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const { isLoading } = useTranscriptionStore();

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onUpload(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div
      className={`w-full p-6 border-2 border-dashed rounded-md text-center transition-all ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label htmlFor="file-upload" className="cursor-pointer">
        <UploadCloud className={`mx-auto h-12 w-12 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
        <p className="mt-2 text-sm text-gray-600">
          {isLoading ? 'Processing...' : 'Drag and drop an audio file here or click to upload'}
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="audio/*"
          disabled={isLoading}
        />
      </label>
    </div>
  );
};

export default AudioUpload;
