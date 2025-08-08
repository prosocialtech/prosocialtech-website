interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${className || ''}`}>
      {/* Header placeholder - uncomment when ready */}
      {/* <Header /> */}

      <main className="flex-1">{children}</main>

      {/* Footer placeholder - uncomment when ready */}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
