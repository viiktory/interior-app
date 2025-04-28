import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../../assets/logo.svg'

type NavLink = {
  label: string
  to: string
}

const links: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Pages', to: '/pages' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="mx-auto flex h-[80px] w-full max-w-container items-center bg-white font-sans text-link">
      <div className="flex w-full items-center justify-between px-safe">
        <Link
          to="/"
          className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'pointer-events-none opacity-0' : ''}`}
        >
          <img src={Logo} alt="Company Logo" className="h-[50px] max-w-[200px]" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-primary transition-colors duration-300 ease-in-out hover:text-btn-hover"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="z-[60] text-3xl text-primary transition-transform duration-200 ease-in-out md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <nav
        className={`fixed left-0 top-0 z-50 h-dvh w-full transform overflow-y-auto bg-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? 'animate-slide-down opacity-100'
            : 'pointer-events-none animate-slide-up opacity-0'
        }`}
      >
        <div className="flex h-full w-full flex-col items-center px-4 py-8">
          <ul className="flex w-full max-w-[400px] flex-col gap-6 text-center text-link">
            {links.map(({ label, to }, index) => (
              <li
                key={to}
                className={`animate-fade-in transition-opacity duration-500 delay-[${index * 100}ms]`}
              >
                <Link
                  to={to}
                  className="text-primary transition-colors duration-300 hover:text-btn-hover"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
