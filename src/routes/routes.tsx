import { PATHS } from '../paths'
import { Layout } from '../components'
import { Home, ToBeDev, ErrorPage, Favorites } from '../pages'

export const routes = [
  {
    path: PATHS.HOME,
    element: <Layout />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.SAVE, element: <Favorites /> },
      { path: PATHS.SOON, element: <ToBeDev /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]
