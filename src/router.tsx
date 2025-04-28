import { createBrowserRouter } from 'react-router-dom'
import { PATHS } from './constants/paths' // Імпорт шляхів
import Layout from './components/Layout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import LoginForm from './components/LoginForm/LoginForm'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.tsx'

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Layout />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATHS.ABOUT, element: <AboutPage /> },
      { path: PATHS.SERVICE.services, element: <ServicesPage /> },
      { path: PATHS.SERVICE.details, element: <ServicesPage /> },
      { path: PATHS.AUTH.login, element: <LoginForm /> },
      { path: PATHS.AUTH.forgotPassword, element: <ForgotPasswordPage /> },
    ],
  },
])
