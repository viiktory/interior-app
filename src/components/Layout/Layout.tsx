import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)

export default Layout
