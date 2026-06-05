'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const pathLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  inventory: 'Inventario WMS',
  operations: 'Operaciones',
  kpis: 'KPIs & Analytics',
  alerts: 'Alertas',
  incidents: 'Incidentes',
  documents: 'Documentos',
  'human-resources': 'Gestión Humana',
  maintenance: 'Mantenimiento',
  clients: 'Portal Clientes',
  configuration: 'Configuración',
  integrations: 'Integraciones',
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return null
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
      <Link href="/" className="hover:text-cyan-400 transition-colors">
        Home
      </Link>
      {segments.map((segment, idx) => {
        const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
        const isLast = idx === segments.length - 1
        return (
          <div key={segment} className="flex items-center gap-2">
            <ChevronRight size={16} />
            {isLast ? (
              <span className="text-cyan-400 font-medium">{label}</span>
            ) : (
              <Link href={`/${segments.slice(0, idx + 1).join('/')}`} className="hover:text-cyan-400 transition-colors">
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
