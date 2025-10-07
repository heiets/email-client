import { EmailActions } from './EmailActions'
import { Email } from '../../types'
import { formatTime } from '../../utils/formatTime';

interface EmailViewerProps {
  selectedEmail: Email;
  onBack: () => void;
}

export const EmailViewer = ({ selectedEmail, onBack }: EmailViewerProps) => (
    <div className={`px-10 py-5 bg-gray-100 shadow-2xl rounded-xl absolute left-0 right-0 top-0 bottom-0 block`}>
      <EmailActions onBack={onBack} selectedEmail={selectedEmail} />
      <div className="flex justify-between py-5 items-end">
        <div className="font-bold text-2xl">{selectedEmail?.from}</div>
        <div className="text-sm text-gray-500">{formatTime(selectedEmail?.date || '')}</div>
      </div>
      <div className="text-lg text-gray-600">{selectedEmail?.content}</div>
    </div>
)