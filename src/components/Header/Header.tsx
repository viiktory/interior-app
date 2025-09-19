import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import LogoIcon from '../../assets/images/logo.svg?react'
import { PATHS } from '@/paths'
import { ItemLink } from '../../components'

const navLinks = [
  { to: PATHS.HOME, label: 'Home' },
  { to: PATHS.ABOUT, label: 'About' },
  { to: PATHS.SERVICE.service, label: 'Services' },
  { to: PATHS.PAGES.page, label: 'Pages' },
  { to: PATHS.CONTACT, label: 'Contact Us' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <section className="absolute left-0 top-0 h-header w-full">
      <header className="mx-auto flex h-full max-w-container items-center justify-between gap-8 px-safe font-sans text-link">
        <ItemLink to={PATHS.HOME} className="relative z-50">
          <LogoIcon className="h-8 w-auto" />
        </ItemLink>

        <button
          onClick={handleOpen}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 text-base md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-40 bg-cardBg p-6 md:static md:block md:w-auto md:rounded-2xl md:bg-cardBg/30 md:shadow-xl md:backdrop-blur-lg`}
        >
          <ul className="flex h-full w-full flex-col items-center justify-center gap-8 md:h-auto md:flex-row md:p-0">
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <ItemLink to={to} onClick={handleOpen} className="hover:text-secondary">
                  {label}
                </ItemLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  )
}

export default Header
