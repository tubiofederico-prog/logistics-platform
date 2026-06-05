import { ReactNode } from 'react'
import { Card } from './Card'

interface StatCardProps {
  title: string
  value: string | number
  unit?: string
  icon: ReactNode
  trend?: number
  onClick?: () => void
}

export function StatCard({ title, value, unit, icon, trend, onClick }: StatCardProps) {
  return (
    <Card onClick={onClick} className="hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2 font-medium">{title}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-white">{value}</p>
            {unit && <p className="text-gray-500 text-sm font-medium">{unit}</p>}
          </div>
          {trend !== undefined && (
            <p className={`text-xs mt-3 font-semibold ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% vs mes anterior
            </p>
          )}
        </div>
        <div className="text-[#00d9ff] text-4xl opacity-70 flex-shrink-0">{icon}</div>
      </div>
    </Card>
  )
}
