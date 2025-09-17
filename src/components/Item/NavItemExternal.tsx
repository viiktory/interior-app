import { ReactNode } from 'react'

type NavItemExternalProps = {
  to: string
  icon?: ReactNode
  label?: string
  className?: string
}

const NavItemExternal = ({ to, icon, label, className }: NavItemExternalProps) => {
  return (
    <li>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {icon && <span className="text-base">{icon}</span>}
        {label}
      </a>
    </li>
  )
}

export default NavItemExternal