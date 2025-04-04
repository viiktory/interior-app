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
    <header className="font-sans text-link h-[80px] bg-white max-w-container w-full mx-auto flex items-center">
      <div className="w-full flex justify-between items-center px-safe">
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="logo" className="h-[50px] max-w-[200px]" />
        </Link>
        <ul className="flex gap-8">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className="text-primary hover:text-btn-hover transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
