import { ReactNode } from 'react'
import { useHotkeysBinding } from '../../hooks/useHotkeysBinding'
import { Folder } from '../../types'

interface HotkeysProviderProps {
  children: ReactNode;
  setSelectedFolder: (folder: Folder) => void;
  setSelectedEmailId: (emailId: number | null) => void;
}

export const HotkeysProvider = ({ children, setSelectedFolder, setSelectedEmailId }: HotkeysProviderProps) => {
  useHotkeysBinding({ setSelectedFolder, setSelectedEmailId });
  return (
    <>{children}</>
  )
}