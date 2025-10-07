import { MouseEvent } from 'react';
import { useMarkAsRead } from '../../context';

interface MarkAsReadButtonProps {
  emailId: number;
  withTitle?: boolean;
}

export const MarkAsReadButton = ({ emailId, withTitle = false }: MarkAsReadButtonProps) => {
  const markAsRead = useMarkAsRead();
  const title = 'Mark as Read';

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    markAsRead(emailId);
  };

  return (
    <button 
      type="button" 
      title={title} 
      aria-label={title}
      className="bg-blue-500 text-white px-4 py-2 space-x-1 rounded-md cursor-pointer hover:bg-blue-600"
      onClick={handleClick}
    >
      <span>👁️</span>
      {
        withTitle && <span>{title}</span>
      }
    </button>
  );
};
