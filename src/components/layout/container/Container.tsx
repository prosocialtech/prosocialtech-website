interface ContainerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'none'
  children: React.ReactNode
  className?: string
}

const Container = ({ size = 'md', children, className }: ContainerProps) => {
  const sizeClasses = {
    xs: 'max-w-xs', // 650px
    sm: 'max-w-sm', // 768px
    md: 'max-w-md', // 960px
    lg: 'max-w-lg', // 1120px
    none: 'max-w-none', // no limit
  }
  return <div className={`${sizeClasses[size]} mx-auto px-4 ${className || ''} `}>{children}</div>
}

export default Container
