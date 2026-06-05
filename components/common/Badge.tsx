interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'info', className = '' }: BadgeProps) {
  const variants = {
    success: 'bg-green-900/40 text-green-300 border border-green-700/50',
    warning: 'bg-yellow-900/40 text-yellow-300 border border-yellow-700/50',
    danger: 'bg-red-900/40 text-red-300 border border-red-700/50',
    info: 'bg-blue-900/40 text-blue-300 border border-blue-700/50',
    secondary: 'bg-gray-700/40 text-gray-300 border border-gray-600/50',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
