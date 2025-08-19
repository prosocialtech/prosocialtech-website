interface ContainerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'none'
  children: React.ReactNode
  className?: string
}

const Container = ({ size = 'md', children, className }: ContainerProps) => {
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    none: 'max-w-none',
  }
  return (
    <div className={`${sizeClasses[size]} mx-auto px-md sm:px-lg ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container
