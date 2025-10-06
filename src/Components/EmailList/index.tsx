import React from 'react'
import { EmailPreview } from './EmailPreview'
import { EMAIL_LIST } from '../Sidebar/constants'

export const EmailList = () => {
  return (
    <div className="py-5 pr-4 pl-8 bg-gray-100 space-y-2 overflow-scroll">
      {EMAIL_LIST.map((email) => (
        <EmailPreview key={email.id} email={email} />
      ))}
    </div>
  )
}