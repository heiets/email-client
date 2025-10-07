import { ReactNode } from 'react'
import { useHotkeysBinding } from '../../hooks/useHotkeysBinding'
import { Email, Folder } from '../../types'

interface HotkeysProviderProps {
  children: ReactNode;
  setSelectedFolder: (folder: Folder) => void;
  setSelectedEmail: (email: Email | null) => void;
}

export const HotkeysProvider = ({ children, setSelectedFolder, setSelectedEmail }: HotkeysProviderProps) => {
  useHotkeysBinding({ setSelectedFolder, setSelectedEmail });
  return (
    <>{children}</>
  )
}