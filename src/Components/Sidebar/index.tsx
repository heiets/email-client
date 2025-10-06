import React from 'react'
import { SIDEBAR_ITEMS } from './constants'

export const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-3 py-5 px-4 bg-gray-900 text-white">
      {SIDEBAR_ITEMS.map((item) => (
        <div key={item.name} className="text-lg font-medium flex items-center gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
          <div className="text-2xl mr-1">{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}