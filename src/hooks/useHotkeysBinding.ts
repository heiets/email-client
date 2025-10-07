import { useEffect } from 'react';
import { Folder } from '../types';

interface UseHotkeysBindingProps {
  setSelectedEmailId: (emailId: number | null) => void;
  setSelectedFolder: (folder: Folder) => void;
}

export const useHotkeysBinding = ({ setSelectedEmailId, setSelectedFolder }: UseHotkeysBindingProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSelectedEmailId(null);
    }
    if (event.key === 'r') {
      setSelectedFolder('read');
    }
    if (event.key === 'd') {
      setSelectedFolder('deleted');
    }
    if (event.key === 'i') {
      setSelectedFolder('inbox');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedEmailId, setSelectedFolder, handleKeyDown]);
};
