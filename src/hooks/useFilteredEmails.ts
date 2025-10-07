import { useMemo } from 'react';
import { Folder } from '../types';
import { EmailState } from '../state/types';

interface UseFilteredEmailsProps {
  selectedFolder: Folder;
  initialEmails: EmailState['emails'];
}

export const useFilteredEmails = ({ selectedFolder, initialEmails }: UseFilteredEmailsProps) => {
  const filteredEmails = useMemo(() => {
    const filteredEmails = { ...initialEmails };
    Object.values(filteredEmails).forEach((email) => {
      if (selectedFolder !== 'deleted' && email.isDeleted) {
        delete filteredEmails[email.id];
      }

      if (selectedFolder === 'read' && !email.isRead) {
        delete filteredEmails[email.id];
      }

      if (selectedFolder === 'deleted' && !email.isDeleted) {
        delete filteredEmails[email.id];
      }

      if (selectedFolder === 'inbox' && email.isDeleted) {
        delete filteredEmails[email.id];
      }
    });

    return filteredEmails;
  }, [initialEmails, selectedFolder]);

  const sortedEmails = useMemo(() => {
    const sortedEmailsArray = Object.values(filteredEmails)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    const sortedEmailsObject: EmailState['emails'] = {};
    sortedEmailsArray.forEach(email => {
      sortedEmailsObject[email.id] = email;
    });

    return sortedEmailsObject;
  }, [filteredEmails]);

  return sortedEmails;
};
