'use client'

import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { mockResources } from '@/lib/mockData'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function MaintenancePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Gestión de Mantenimiento</h1>
        <p className="text-gray-400">Control de disponibilidad y mantenimiento de recursos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Equipos Operativos</p>
          <p className="text-4xl font-bold text-green-400">7</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">En Mantenimiento</p>
          <p className="text-4xl font-bold text-yellow-400">1</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Disponibilidad Media</p>
          <p className="text-4xl font-bold text-cyan-400">87.5%</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Fallas Reportadas</p>
          <p className="text-4xl font-bold text-red-400">2</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Estado de Recursos</h3>
        <div className="space-y-3">
          {mockResources.map((resource) => (
            <div key={resource.id} className="p-4 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">{resource.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{resource.type}</p>
                </div>
                <Badge
                  variant={
                    resource.status === 'Operativo'
                      ? 'success'
                      : resource.status === 'En Mantenimiento'
                      ? 'warning'
                      : 'danger'
                  }
                >
                  {resource.status}
                </Badge>
              </div>
              {resource.capacity > 0 && (
                <p className="text-sm text-gray-300">Capacidad: {resource.capacity} Ton</p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
