import { EmailAction, EmailState } from './types';

export const emailReducer = (state: EmailState, action: EmailAction): EmailState => {
    switch (action.type) {
      case 'ADD_EMAILS':
        return {
          ...state,
          emails: [...state.emails, ...action.payload],
        };
      
      case 'MARK_AS_READ':
        return {
          ...state,
          emails: state.emails.map(email =>
            email.id === action.payload ? { ...email, isRead: true } : email
          ),
        };
      
      case 'MARK_AS_UNREAD':
        return {
          ...state,
          emails: state.emails.map(email =>
            email.id === action.payload ? { ...email, isRead: false } : email
          ),
        };
      
      case 'DELETE_EMAIL':
        return {
          ...state,
          emails: state.emails.map(email =>
            email.id === action.payload ? { ...email, isDeleted: true } : email
          ),
        };
      
      default:
        return state;
    }
  };
  