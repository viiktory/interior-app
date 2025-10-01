import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer, Header } from '../../components'

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
