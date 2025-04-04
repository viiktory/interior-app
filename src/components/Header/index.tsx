import Logo from '@/assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Pages', to: '/pages' },
    { label: 'Contact Us', to: '/contact' },
  ]

  return (
    <header className="font-sans text-link font-normal h-[80px] bg-white shadow md:flex-col">
      <div className="max-w-container mx-auto flex justify-between items-center px-6">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-8" />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-8 list-none">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-primary no-underline hover:text-btn-hover transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
