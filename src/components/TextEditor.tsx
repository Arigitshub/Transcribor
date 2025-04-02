import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useTranscriptionStore } from '../store';

interface TextEditorProps {
  initialText: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ initialText }) => {
  const { editedText, setEditedText } = useTranscriptionStore();

  useEffect(() => {
    setEditedText(initialText);
  }, [initialText, setEditedText]);

  return (
    <div className="mt-6" data-color-mode="light">
      <MDEditor
        value={editedText}
        onChange={(value) => setEditedText(value || '')}
        height={300}
        preview="edit"
        extraCommands={[]}
      />
    </div>
  );
};

export default TextEditor;
