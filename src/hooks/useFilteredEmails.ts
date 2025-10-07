import { useMemo } from 'react';
import { Folder, Email } from '../types';

export const useFilteredEmails = ({ selectedFolder, initialEmails }: { selectedFolder: Folder, initialEmails: Email[] }) => {
  const filteredEmails = useMemo(() => {
    return initialEmails.filter((email) => {
      if (selectedFolder === 'read') {
        return email.isRead;
      } else if (selectedFolder === 'deleted') {
        return email.isDeleted;
      }
      return !email.isDeleted;
    });
  }, [initialEmails, selectedFolder]);

  const sortedEmails = useMemo(() => {
    return filteredEmails.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filteredEmails]);

  return sortedEmails;
};
