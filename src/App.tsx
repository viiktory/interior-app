import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const routers = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={routers} />
}

export default App
