import { EmailPreview } from './EmailPreview'
import { useEmailContext } from '../../context';

interface EmailListProps {
  setSelectedEmailId: (emailId: number) => void;
}

export const EmailList = ({ setSelectedEmailId }: EmailListProps) => {
  const { emails } = useEmailContext();
  return (
    <div className="py-5 pr-4 pl-8 bg-gray-100 space-y-2 overflow-scroll h-full">
      {Object.values(emails)
      .map((email) => (
        <EmailPreview key={email.id} email={email} setSelectedEmailId={setSelectedEmailId} />
      ))}
    </div>
  );
};
