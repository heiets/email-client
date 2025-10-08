import { Email } from '../../../types'
import { formatTime } from '../../../utils/formatTime'
import { MarkAsReadButton, MarkAsUnreadButton, DeleteButton } from '../../EmailActions';
import { useMarkAsRead } from '../../../context';

interface EmailPreviewProps {
    email: Email;
    setSelectedEmailId: (emailId: number) => void;
}

export const EmailPreview = ({ email, setSelectedEmailId }: EmailPreviewProps) => {
    const markAsRead = useMarkAsRead();
    const { icon, from, subject, content, date, isRead, isDeleted } = email;

    const handleViewClick = () => {
        setSelectedEmailId(email.id);
        markAsRead(email.id);
    };

    return (
        <div className="group grid grid-cols-[15%_75%_10%] hover:bg-blue-100 p-2 rounded-md cursor-pointer text-lg items-center" onClick={handleViewClick}>
            <div className="flex space-x-3">
                <div>
                    {icon}
                </div>
                <div className={`${isRead ? 'text-gray-900' : 'font-semibold text-black'}`}>
                    {from}
                </div>
            </div>
            <div className="flex space-x-4 pr-10">
                <div className={`whitespace-nowrap ${isRead ? 'text-gray-800' : 'text-black font-semibold'}`}>
                    {subject}
                </div>
                <div className={`truncate ${isRead ? 'text-gray-400' : 'text-black'}`}>
                    {content}
                </div>
            </div>
            <div className="h-[60px] flex items-center">
                <div className="text-sm text-gray-500 group-hover:hidden">{formatTime(date)}</div>
                <div className="space-x-3 group-hover:flex hidden">
                    {!isRead && <MarkAsReadButton emailId={email.id} />}
                    {isRead && <MarkAsUnreadButton emailId={email.id} />}
                    {!isDeleted && <DeleteButton emailId={email.id} />}
                </div>
            </div>
        </div>
    )
}