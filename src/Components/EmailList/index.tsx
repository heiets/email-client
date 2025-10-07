import { EmailPreview } from './EmailPreview'
import { Email } from '../../types'
import { useEmailContext } from '../../context';

interface EmailListProps {
  setSelectedEmail: (email: Email) => void;
}

export const EmailList = ({ setSelectedEmail }: EmailListProps) => {
  const { emails } = useEmailContext();
  return (
    <div className="py-5 pr-4 pl-8 bg-gray-100 space-y-2 overflow-scroll h-full">
      {emails.map((email) => (
        <EmailPreview key={email.id} email={email} setSelectedEmail={setSelectedEmail} />
      ))}
    </div>
  );
};
