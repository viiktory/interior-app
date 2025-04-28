import { FC } from 'react'

interface BtnProps {
  text: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<BtnProps> = ({ text, className = '', onClick, type = 'button' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button
