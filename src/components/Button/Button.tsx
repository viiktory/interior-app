import { ReactNode } from 'react'

type ButtonProps = {
  text?: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
}

const Button = ({
  text,
  className = '',
  disabled,
  onClick,
  type = 'button',
  icon,
}: ButtonProps) => {
  return (
    <button className={`button ${className}`} disabled={disabled} onClick={onClick} type={type}>
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button
