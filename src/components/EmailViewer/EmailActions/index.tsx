import { Email } from "../../../types";
import { MarkAsUnreadButton, DeleteButton } from "../../EmailActions";

interface EmailActionsProps {
  onBack: () => void;
  selectedEmail: Email;
}

export const EmailActions = ({ onBack, selectedEmail }: EmailActionsProps) => (
  <div className="flex justify-between w-full">
    <div className="flex">
      <div
        className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500"
        onClick={onBack}
      >
        ⬅️ Back to Inbox
      </div>
    </div>
    <div className="flex space-x-3">
      {selectedEmail.isRead && (
        <MarkAsUnreadButton emailId={selectedEmail.id} withTitle />
      )}
      {!selectedEmail.isDeleted && (
        <DeleteButton emailId={selectedEmail.id} withTitle />
      )}
    </div>
  </div>
);
