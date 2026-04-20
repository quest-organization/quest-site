import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComingSoon from './routes/comingSoon'
import ErrorPage from './routes/error'
import Invite from './routes/bot/invite'
import './root.css'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ComingSoon /> },
      { path: '/bot/invite', element: <Invite /> },
      {
        path: '*',
        loader: () => {
          throw new Response('Not Found', { status: 404, statusText: 'Not Found' })
        },
      },
    ],
  },
])

  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)