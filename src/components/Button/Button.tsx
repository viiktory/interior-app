import { ReactNode } from 'react'

type ButtonProps = {
  text?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
}

const Button = ({ text, className = '', onClick, type = 'button', icon }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button
