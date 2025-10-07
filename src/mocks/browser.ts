import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import { EMAIL_LIST } from './constants'

// Simulation to return 40 emails on the first page load and then simulate new emails in realtime
// by short polling
let callCount = 0
const INITIAL_EMAILS_COUNT = 40

export const worker = setupWorker(
    http.get('/api/emails', () => {
        const emailsToReturn = callCount ? [EMAIL_LIST[(INITIAL_EMAILS_COUNT + callCount)]] : EMAIL_LIST.slice(0, INITIAL_EMAILS_COUNT)
        callCount++
        return HttpResponse.json(emailsToReturn)
    }),
)
  
