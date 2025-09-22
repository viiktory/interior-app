import { PATHS } from '../paths'
import { Layout } from '../components'
import { Home, ToBeDev, ErrorPage } from '../pages'

export const routes = [
  {
    path: PATHS.HOME,
    element: <Layout />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.SOON, element: <ToBeDev /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]
