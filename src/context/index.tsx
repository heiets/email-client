import { createContext, useContext, ReactNode } from "react";
import { Folder } from "../types";
import { EmailState } from "../state/types";
import { useEmails } from "../hooks/useEmails";

export const EmailContext = createContext<{
  emails: EmailState["emails"];
  actions: {
    markAsRead: (emailId: number) => void;
    markAsUnread: (emailId: number) => void;
    deleteEmail: (emailId: number) => void;
  };
  selectedEmailId: number | null;
}>({
  emails: {},
  actions: {
    markAsRead: () => {},
    markAsUnread: () => {},
    deleteEmail: () => {},
  },
  selectedEmailId: null,
});

export const EmailProvider = ({
  children,
  selectedFolder,
  selectedEmailId,
}: {
  children: ReactNode;
  selectedFolder: Folder;
  selectedEmailId: number | null;
}) => {
  const { emails, actions } = useEmails(selectedFolder);
  return (
    <EmailContext.Provider value={{ emails, actions, selectedEmailId }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => {
  return useContext(EmailContext);
};

export const useMarkAsRead = () => {
  const { actions } = useEmailContext();
  return actions.markAsRead;
};

export const useMarkAsUnread = () => {
  const { actions } = useEmailContext();
  return actions.markAsUnread;
};

export const useDeleteEmail = () => {
  const { actions } = useEmailContext();
  return actions.deleteEmail;
};

export const useSelectedEmail = () => {
  const { emails, selectedEmailId } = useEmailContext();
  return selectedEmailId ? emails[selectedEmailId] : null;
};
