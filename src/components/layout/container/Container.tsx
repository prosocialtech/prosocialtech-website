interface ContainerProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'none'
  children: React.ReactNode
  className?: string
}

const Container = ({ size, children, className }: ContainerProps) => {
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    none: '',
  }
  return (
    // Either streamline this max-width or add to design system
    <div className={`${className || ''} ${sizeClasses[size]} mx-auto px-md sm:px-lg max-w-[910px]`}>
      {children}
    </div>
  )
}

export default Container
