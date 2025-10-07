import { useReducer, useEffect } from 'react';
import { useQuery } from'@tanstack/react-query';
import { EmailListSchema, Folder } from '../types';
import { emailReducer } from '../state/reducers';
import { EmailState } from '../state/types';
import { useFilteredEmails } from './useFilteredEmails';

export const initialState: EmailState = {
  emails: {},
};

export const useEmails = (selectedFolder: Folder) => {
  const [state, dispatch] = useReducer(emailReducer, initialState);
  
  const { data, isLoading } = useQuery({
    queryKey: ['emails'],
    queryFn: () => fetch('/api/emails').then(res => res.json()),
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (!isLoading && data) {
      try {
        const parsedEmails = EmailListSchema.parse(data);
        dispatch({ type: 'ADD_EMAILS', payload: parsedEmails });
      } catch (error) {
        console.error('Error parsing emails:', error);
        dispatch({ type: 'ADD_EMAILS', payload: [] });
      }
    }
  }, [data, isLoading]);

  const emails = useFilteredEmails({ selectedFolder, initialEmails: state.emails });

  const markAsRead = (emailId: number) => {
    dispatch({ type: 'MARK_AS_READ', payload: emailId });
  };

  const markAsUnread = (emailId: number) => {
    dispatch({ type: 'MARK_AS_UNREAD', payload: emailId });
  };

  const deleteEmail = (emailId: number) => {
    dispatch({ type: 'DELETE_EMAIL', payload: emailId });
  };

  return { 
    emails, 
    isLoading, 
    actions: {
      markAsRead,
      markAsUnread,
      deleteEmail,
    }
  };
};