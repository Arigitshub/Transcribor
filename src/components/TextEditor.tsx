import React, { useState, useRef, useEffect } from 'react';

    interface TextEditorProps {
      initialText: string;
      onTextChange: (text: string) => void;
    }

    const TextEditor: React.FC<TextEditorProps> = ({ initialText, onTextChange }) => {
      const [text, setText] = useState(initialText);
      const editorRef = useRef<HTMLTextAreaElement>(null);

      useEffect(() => {
        setText(initialText);
      }, [initialText]);

      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setText(newText);
        onTextChange(newText);
      };

      return (
        <textarea
          ref={editorRef}
          value={text}
          onChange={handleChange}
          className="w-full h-64 p-4 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Edit transcription here..."
        />
      );
    };

    export default TextEditor;
