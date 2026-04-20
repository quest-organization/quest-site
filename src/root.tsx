import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComingSoon from './routes/comingSoon'
import Invite from './routes/bot/invite'
import './root.css'

const router = createBrowserRouter([
  { path: '/', element: <ComingSoon /> },
  { path: '/bot/discord', element: <Invite/> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)