import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import { EMAIL_LIST } from './constants'
 
export const worker = setupWorker(
    http.get('/api/emails', () => HttpResponse.json(EMAIL_LIST)),
)
  
