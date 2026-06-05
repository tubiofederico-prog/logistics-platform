'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  Boxes,
  Zap,
  Bell,
  AlertCircle,
  FileText,
  Users,
  Wrench,
  Settings,
  Plug,
  Home,
  Truck,
} from 'lucide-react'

const modules = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Inventario WMS', href: '/inventory', icon: Boxes },
  { name: 'Operaciones', href: '/operations', icon: Truck },
  { name: 'KPIs & Analytics', href: '/kpis', icon: BarChart3 },
  { name: 'Alertas', href: '/alerts', icon: Bell },
  { name: 'Incidentes', href: '/incidents', icon: AlertCircle },
  { name: 'Documentos', href: '/documents', icon: FileText },
  { name: 'Gestión Humana', href: '/human-resources', icon: Users },
  { name: 'Mantenimiento', href: '/maintenance', icon: Wrench },
  { name: 'Portal Clientes', href: '/clients', icon: Zap },
  { name: 'Configuración', href: '/configuration', icon: Settings },
  { name: 'Integraciones', href: '/integrations', icon: Plug },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-dark-secondary border-r border-dark-border h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-dark-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-electric-500 bg-clip-text text-transparent">
          LogistiX
        </h1>
        <p className="text-xs text-gray-500 mt-1">Torre de Control</p>
      </div>

      <nav className="p-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon
          const isActive = pathname === module.href || pathname.startsWith(module.href + '/')
          return (
            <Link key={module.href} href={module.href}>
              <div
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-dark-primary font-semibold'
                    : 'text-gray-300 hover:bg-dark-tertiary hover:text-cyan-400'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm">{module.name}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-dark-border bg-dark-primary">
        <div className="text-xs text-gray-500">
          <p className="font-semibold text-gray-400 mb-1">Sesión</p>
          <p>Usuario: Admin</p>
          <p>Sede: Cartagena</p>
        </div>
      </div>
    </aside>
  )
}
