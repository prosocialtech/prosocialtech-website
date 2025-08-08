interface SectionProps {
  variant?: 'light' | 'dark' | 'gradient-1' | 'gradient-2' | 'gradient-3'
  children: React.ReactNode
  className?: string
}

const Section = ({ variant = 'dark', children, className }: SectionProps) => {
  const variants = {
    light: 'bg-light',
    dark: 'bg-dark',
    'gradient-1': 'bg-gradient-1',
    'gradient-2': 'bg-gradient-2',
    'gradient-3': 'bg-gradient-3',
  }
  return (
    <section
      className={`py-2xl w-full mx-auto text-center ${variants[variant]} ${className || ''}`}
    >
      {children}
    </section>
  )
}
export default Section
