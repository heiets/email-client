import { MouseEvent } from 'react';
import { useMarkAsUnread } from '../../context';

interface MarkAsUnreadButtonProps {
  emailId: number;
  withTitle?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const MarkAsUnreadButton = ({ emailId, withTitle = false, onClick }: MarkAsUnreadButtonProps) => {
  const markAsUnread = useMarkAsUnread();
  const title = 'Mark as Unread';
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    markAsUnread(emailId);
    onClick?.(e);
  };

  return (
    <button 
      type="button" 
      title={title} 
      aria-label={title} 
      className="bg-green-500 text-white px-4 py-2 space-x-2 rounded-md cursor-pointer hover:bg-green-600"
      onClick={handleClick}
    >
      <span>🙈</span>
      {
        withTitle && <span>{title}</span>
      }
    </button>
  );
};
