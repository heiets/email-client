import { createContext, useContext, ReactNode } from 'react';
import { Folder } from '../types';
import { EmailState } from '../state/types';
import { useEmails } from '../hooks/useEmails';

export const EmailContext = createContext<{
  emails: EmailState['emails'];
  actions: {
    markAsRead: (emailId: number) => void;
    markAsUnread: (emailId: number) => void;
    deleteEmail: (emailId: number) => void;
  };
}>({
  emails: [],
  actions: {
    markAsRead: () => {},
    markAsUnread: () => {},
    deleteEmail: () => {},
  },
});

export const EmailProvider = ({ children, selectedFolder }: { children: ReactNode, selectedFolder: Folder }) => {
  const { emails, actions } = useEmails(selectedFolder);
  return (
    <EmailContext.Provider value={{ emails, actions }}>
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
