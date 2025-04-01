import React from 'react';

    interface TranscriptionDisplayProps {
      transcription: string;
    }

    const TranscriptionDisplay: React.FC<TranscriptionDisplayProps> = ({ transcription }) => {
      return (
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
          <p>{transcription}</p>
        </div>
      );
    };

    export default TranscriptionDisplay;
