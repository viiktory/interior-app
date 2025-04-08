import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '@/assets/logo.svg'

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
    <header className="font-sans text-link h-[80px] bg-white max-w-container w-full mx-auto flex items-center">
      <div className="w-full flex justify-between items-center px-safe">
        <Link
          to="/"
          className={`flex-shrink-0 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <img src={Logo} alt="Company Logo" className="h-[50px] max-w-[200px]" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-primary hover:text-btn-hover transition-colors duration-300 ease-in-out"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-3xl text-primary z-[60] transition-transform duration-200 ease-in-out"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-dvh bg-white z-50 overflow-y-auto transition-all duration-500 ease-in-out transform ${
          isOpen
            ? 'animate-slide-down opacity-100'
            : 'animate-slide-up opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full w-full px-4 py-8 flex flex-col items-center">
          <ul className="flex flex-col gap-6 text-link w-full max-w-[400px] text-center">
            {links.map(({ label, to }, index) => (
              <li
                key={to}
                className={`animate-fade-in transition-opacity duration-500 delay-[${index * 100}ms]`}
              >
                <Link
                  to={to}
                  className="text-primary hover:text-btn-hover transition-colors duration-300"
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
