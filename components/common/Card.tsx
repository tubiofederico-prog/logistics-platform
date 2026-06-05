interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`bg-[#1a2332] border border-[#2d435e] rounded-lg p-6 shadow-lg ${
        onClick ? 'cursor-pointer hover:shadow-xl hover:border-[#00d9ff] transition-all' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
