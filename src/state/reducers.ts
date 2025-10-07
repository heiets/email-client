import { EmailAction, EmailState } from './types';

export const emailReducer = (state: EmailState, action: EmailAction): EmailState => {
    switch (action.type) {
      case 'ADD_EMAILS':
        const newEmails: EmailState['emails'] = {};
        action.payload.forEach(email => {
          newEmails[email.id] = email;
        });
        return {
          ...state,
          emails: { ...state.emails, ...newEmails },
        };
      
      case 'MARK_AS_READ':
        if (!state.emails[action.payload]) {
          return state;
        }
        return {
          ...state,
          emails: {
            ...state.emails,
            [action.payload]: { ...state.emails[action.payload], isRead: true }
          },
        };
      
      case 'MARK_AS_UNREAD':
        if (!state.emails[action.payload]) {
          return state;
        }
        return {
          ...state,
          emails: {
            ...state.emails,
            [action.payload]: { ...state.emails[action.payload], isRead: false }
          },
        };
      
      case 'DELETE_EMAIL':
        if (!state.emails[action.payload]) {
          return state;
        }
        return {
          ...state,
          emails: {
            ...state.emails,
            [action.payload]: { ...state.emails[action.payload], isDeleted: true }
          },
        };
      
      default:
        return state;
    }
  };
  