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
    <header className="py-4 font-jost text-base font-normal h-[80px] bg-white shadow">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-8" />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-[40px] list-none">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[#292F36] no-underline hover:text-[#292F36] transition-colors"
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
