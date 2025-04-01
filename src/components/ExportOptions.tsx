import React from 'react';
    import { Download } from 'lucide-react';

    interface ExportOptionsProps {
      text: string;
      onExport: (format: string) => void;
    }

    const ExportOptions: React.FC<ExportOptionsProps> = ({ text, onExport }) => {
      const handleExport = (format: string) => {
        onExport(format);
      };

      return (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Export</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExport('txt')}
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              TXT
            </button>
            <button
              onClick={() => handleExport('srt')}
              className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              SRT
            </button>
            <button
              onClick={() => handleExport('docx')}
              className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              DOCX
            </button>
          </div>
        </div>
      );
    };

    export default ExportOptions;
