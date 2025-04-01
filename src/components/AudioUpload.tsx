import React, { useState } from 'react';
    import { UploadCloud } from 'lucide-react';

    interface AudioUploadProps {
      onUpload: (file: File) => void;
    }

    const AudioUpload: React.FC<AudioUploadProps> = ({ onUpload }) => {
      const [isDragging, setIsDragging] = useState(false);
      const [file, setFile] = useState<File | null>(null);

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
          setFile(droppedFile);
          onUpload(droppedFile);
        }
      };

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
          setFile(selectedFile);
          onUpload(selectedFile);
        }
      };

      return (
        <div
          className={`w-full p-6 border-2 border-dashed rounded-md text-center ${
            isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label htmlFor="file-upload" className="cursor-pointer">
            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              {file ? file.name : 'Drag and drop an audio file here or click to upload'}
            </p>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="audio/*"
            />
          </label>
        </div>
      );
    };

    export default AudioUpload;
