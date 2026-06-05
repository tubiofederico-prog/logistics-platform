interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`bg-dark-secondary border border-dark-border rounded-lg p-6 shadow-lg ${
        onClick ? 'cursor-pointer hover:shadow-xl hover:border-cyan-400 transition-all' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
