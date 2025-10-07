import { useEffect } from 'react';
import { Folder, Email } from '../types';

interface UseHotkeysBindingProps {
  setSelectedEmail: (email: Email | null) => void;
  setSelectedFolder: (folder: Folder) => void;
}

export const useHotkeysBinding = ({ setSelectedEmail, setSelectedFolder }: UseHotkeysBindingProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSelectedEmail(null);
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
  }, [setSelectedEmail, setSelectedFolder, handleKeyDown]);
};
