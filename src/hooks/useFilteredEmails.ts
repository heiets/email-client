import { useMemo } from 'react';
import { Folder } from '../types';
import { EmailState } from '../state/types';

interface UseFilteredEmailsProps {
  selectedFolder: Folder;
  initialEmails: EmailState['emails'];
}

export const useFilteredEmails = ({
  selectedFolder,
  initialEmails,
}: UseFilteredEmailsProps) => {
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

  return filteredEmails;
};
