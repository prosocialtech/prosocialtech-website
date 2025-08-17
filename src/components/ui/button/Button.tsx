import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

interface ButtonProps {
  href: string
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  ariaLabel?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  disabled?: boolean
  onClick?: () => void
}
const Button = ({
  href,
  children,
  className,
  variant = 'primary',
  ariaLabel,
  target,
  rel,
  disabled,
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    quaternary: 'btn-quaternary',
  }
  return (
    <a
      href={href}
      className={`btn text-on-light ${variants[variant]} min-w-24 sm:min-w-36 w-full sm:w-auto ${className || ''}`}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Button
