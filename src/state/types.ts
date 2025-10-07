import { Email } from "../types";

export type EmailAction = 
  | { type: 'ADD_EMAILS'; payload: Email[] }
  | { type: 'MARK_AS_READ'; payload: number }
  | { type: 'MARK_AS_UNREAD'; payload: number }
  | { type: 'DELETE_EMAIL'; payload: number };

export interface EmailState {
  emails: Record<number, Email>;
}
