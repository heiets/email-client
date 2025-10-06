import React from 'react'

export const EmailPreview = ({ email }: { email: any }) => {
  // Format the UTC date to display time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="grid grid-cols-[20%_75%_5%] hover:bg-blue-100 p-2 rounded-md cursor-pointer text-lg">
        <div className="flex space-x-3">
            <div>
                {email.icon}
            </div>
            <div className="font-bold">
                {email.from}
            </div>
        </div>
        <div className="flex space-x-4 pr-10">
            <div className="text-gray-700 whitespace-nowrap">
                {email.subject}
            </div>
            <div className="text-gray-500 truncate">
                {email.content}
            </div>
        </div>
        <div className="text-sm text-gray-500">{formatTime(email.date)}</div>
    </div>
  )
}