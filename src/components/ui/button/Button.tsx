import type { ReactNode } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'
  | 'senary'

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
    quinary: 'btn-quinary',
    senary: 'btn-senary',
  }
  return (
    <a
      href={href}
      className={`btn text-on-light ${variants[variant]} min-w-24 sm:min-w-36 w-4/5 sm:w-auto mx-auto sm:mx-0 ${className || ''}`}
      aria-label={ariaLabel}
      target={target}
      rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Button
