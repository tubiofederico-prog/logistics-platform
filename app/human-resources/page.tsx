'use client'

import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { mockTeam, mockShifts } from '@/lib/mockData'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function HumanResourcesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Gestión de Personal</h1>
        <p className="text-gray-400">Control de recursos humanos y productividad</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Personal Total</p>
          <p className="text-4xl font-bold text-cyan-400">{mockTeam.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Disponibles Hoy</p>
          <p className="text-4xl font-bold text-green-400">
            {mockTeam.filter((t) => t.status === 'Activo').length}
          </p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Turnos Activos</p>
          <p className="text-4xl font-bold text-electric-500">{mockShifts.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Productividad Promedio</p>
          <p className="text-4xl font-bold text-yellow-400">87%</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Personal</h3>
          <div className="space-y-3">
            {mockTeam.map((member) => (
              <div key={member.id} className="p-3 bg-dark-tertiary rounded border border-dark-border">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">{member.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{member.role}</p>
                  </div>
                  <Badge variant={member.status === 'Activo' ? 'success' : 'secondary'}>
                    {member.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 mt-2">{member.shift}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Turnos</h3>
          <div className="space-y-3">
            {mockShifts.map((shift) => (
              <div key={shift.id} className="p-3 bg-dark-tertiary rounded border border-dark-border">
                <p className="font-medium text-white text-sm">{shift.name}</p>
                <p className="text-xs text-gray-400 mt-1">{shift.startTime} - {shift.endTime}</p>
                <p className="text-xs text-gray-400 mt-2">{shift.operatives} operarios • {shift.supervisor}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Acciones</h3>
        <div className="space-y-2">
          <Button variant="secondary" className="w-full">
            Asignar Turno
          </Button>
          <Button variant="secondary" className="w-full">
            Ver Desempeño
          </Button>
          <Button variant="outline" className="w-full">
            Reportar Ausencia
          </Button>
        </div>
      </Card>
    </>
  )
}
