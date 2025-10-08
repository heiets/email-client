import { ReactNode } from "react";
import { useHotkeysBinding } from "../../hooks/useHotkeysBinding";
import { Folder } from "../../types";
import { useEmailContext } from "../../context";

interface HotkeysProviderProps {
  children: ReactNode;
  setSelectedFolder: (folder: Folder) => void;
  setSelectedEmailId: (emailId: number | null) => void;
  selectedEmailId: number | null;
}

export const HotkeysProvider = ({
  children,
  setSelectedFolder,
  setSelectedEmailId,
  selectedEmailId,
}: HotkeysProviderProps) => {
  const { actions } = useEmailContext();

  useHotkeysBinding({
    setSelectedFolder,
    setSelectedEmailId,
    selectedEmailId,
    markAsRead: actions.markAsRead,
    markAsUnread: actions.markAsUnread,
    deleteEmail: actions.deleteEmail,
  });

  return <>{children}</>;
};
