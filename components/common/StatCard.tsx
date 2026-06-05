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
    <Card onClick={onClick} className="hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">{value}</p>
            {unit && <p className="text-gray-500 text-sm">{unit}</p>}
          </div>
          {trend !== undefined && (
            <p className={`text-xs mt-2 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend >= 0 ? '+' : ''}{trend}% vs mes anterior
            </p>
          )}
        </div>
        <div className="text-cyan-400 text-3xl opacity-60">{icon}</div>
      </div>
    </Card>
  )
}
