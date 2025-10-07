import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

async function enableMocking() {
  const { worker } = await import('./mocks/browser.js')
  return worker.start()
}
 
enableMocking().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
