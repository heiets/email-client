import { MouseEvent } from 'react';
import { useDeleteEmail } from '../../context';

interface DeleteButtonProps {
  emailId: number;
  withTitle?: boolean;
  onDelete?: () => void;
}

export const DeleteButton = ({ emailId, withTitle = false, onDelete }: DeleteButtonProps) => {
  const deleteEmail = useDeleteEmail();
  const title = 'Delete';
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteEmail(emailId);
    onDelete?.();
  };

  return (
    <button 
      type="button" 
      title={title} 
      aria-label={title} 
      className="bg-red-500 text-white px-4 py-2 space-x-2 rounded-md cursor-pointer hover:bg-red-600"
      onClick={handleClick}
    >
      <span>🗑️</span>
      {
        withTitle && <span>{title}</span>
      }
    </button>
  );
};
