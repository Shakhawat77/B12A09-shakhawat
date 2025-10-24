import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/routes.jsx'
export const AuthContext = createContext(null);
const userInfo ={
  email:'shakhawat@gmail.com'
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext value ={userInfo}>
    <RouterProvider router={router}></RouterProvider>
   </AuthContext>
  </StrictMode>,
)
