import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinksProps = {
  to: string
  label?: string
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const ItemLink = ({ to, label, className, onClick, children }: LinksProps) => {
  const isLink = to.startsWith('#')
  const content = children ?? label

  return isLink ? (
    <a href={to} aria-label={label} className={className} onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link to={to} className={className} onClick={onClick}>
      {content}
    </Link>
  )
}

export default ItemLink
