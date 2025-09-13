import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinksProps = {
  to: string
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const ItemLink = ({ to, className, onClick, children }: LinksProps) => {
  const isLink = to.startsWith('#')

  return isLink ? (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default ItemLink
