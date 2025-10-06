import React from 'react'

export const EmailActions = () => {
  return (
    <div className="flex space-x-3 justify-end">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">👁️ Mark as Read</div>
      <div className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600">🙈 Mark as Unread</div>
      <div className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600">🗑️ Delete</div>
    </div>
  )
}