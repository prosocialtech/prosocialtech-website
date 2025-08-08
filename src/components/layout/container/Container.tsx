interface ContainerProps {
  size?: 'default' | 'narrow' | 'wide' | 'full'
  children: React.ReactNode
  className?: string
}

const Container = ({ size = 'default', children, className }: ContainerProps) => {
  const sizeClasses = {
    narrow: 'max-w-sm',
    default: 'max-w-md',
    wide: 'max-w-lg',
    full: 'max-w-none',
  }
  return <div className={`${sizeClasses[size]} mx-auto px-4 ${className || ''} `}>{children}</div>
}

export default Container
