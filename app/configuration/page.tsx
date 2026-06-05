'use client'

import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { mockRules } from '@/lib/mockData'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Plus, Settings } from 'lucide-react'

export default function ConfigurationPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Configuración y Parametrización</h1>
          <p className="text-gray-400">Ajustes de reglas operativas y parámetros del sistema</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Reglas Operativas</h3>
          <p className="text-4xl font-bold text-cyan-400 mb-4">{mockRules.length}</p>
          <Button variant="primary" className="w-full">
            <Plus size={18} /> Nueva Regla
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Flujos de Aprobación</h3>
          <p className="text-4xl font-bold text-electric-500 mb-4">4</p>
          <Button variant="secondary" className="w-full">
            Configurar Flujos
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Usuarios y Roles</h3>
          <p className="text-4xl font-bold text-green-400 mb-4">8</p>
          <Button variant="secondary" className="w-full">
            Gestionar Accesos
          </Button>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Settings size={20} className="text-cyan-400" />
          Reglas de Operación
        </h3>
        <div className="space-y-3">
          {mockRules.map((rule) => (
            <div key={rule.id} className="p-4 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">{rule.name}</p>
                  <p className="text-sm text-gray-400 mt-1">Condición: {rule.condition}</p>
                  <p className="text-sm text-gray-400">Acción: {rule.action}</p>
                </div>
                <Badge variant="success">{rule.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Parámetros KPI</h3>
          <div className="space-y-3">
            {[
              { label: 'Meta SLA', value: '95%' },
              { label: 'Meta Productividad', value: '90%' },
              { label: 'Capacidad Máxima', value: '4,100 Ton' },
              { label: 'Turno Estándar', value: '8 horas' },
            ].map((param, idx) => (
              <div key={idx} className="p-3 bg-dark-tertiary rounded border border-dark-border flex justify-between">
                <span className="text-gray-300">{param.label}</span>
                <span className="font-medium text-cyan-400">{param.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Automatizaciones</h3>
          <div className="space-y-2">
            <Button variant="secondary" className="w-full">
              Configurar Alertas Automáticas
            </Button>
            <Button variant="secondary" className="w-full">
              Generar Reportes Automáticos
            </Button>
            <Button variant="secondary" className="w-full">
              Sincronización de Datos
            </Button>
            <Button variant="outline" className="w-full">
              Ver Logs de Automatizaciones
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}
