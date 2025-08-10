import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}
const Button = ({ href, children, className, variant = 'primary' }: ButtonProps) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    quaternary: 'btn-quaternary',
  }
  return (
    <a href={href} className={`btn text-on-light ${variants[variant]} ${className || ''}`}>
      {children}
    </a>
  )
}

export default Button
