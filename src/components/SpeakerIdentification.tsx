import React from 'react';

    interface SpeakerIdentificationProps {
      speakers: string[];
      onSpeakerSelect: (speaker: string) => void;
    }

    const SpeakerIdentification: React.FC<SpeakerIdentificationProps> = ({ speakers, onSpeakerSelect }) => {
      return (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Speaker Identification</h3>
          {speakers.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {speakers.map((speaker) => (
                <button
                  key={speaker}
                  onClick={() => onSpeakerSelect(speaker)}
                  className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  {speaker}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No speakers identified.</p>
          )}
        </div>
      );
    };

    export default SpeakerIdentification;
