'use client'

import Link from 'next/link'
import { Plus, Filter } from 'lucide-react'
import { mockAlerts } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function AlertsPage() {
  const [filter, setFilter] = useState('active')

  const filtered = filter === 'active' ? mockAlerts.filter((a) => a.status === 'Activa') : mockAlerts

  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Centro de Alertas</h1>
          <p className="text-gray-400">Monitoreo centralizado de eventos operativos</p>
        </div>
        <Link href="/alerts/new">
          <Button variant="primary">
            <Plus size={18} /> Crear Alerta
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Críticas Activas</p>
          <p className="text-4xl font-bold text-red-400">2</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Advertencias</p>
          <p className="text-4xl font-bold text-yellow-400">3</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Resueltas Hoy</p>
          <p className="text-4xl font-bold text-green-400">5</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Tasa Resolución</p>
          <p className="text-4xl font-bold text-cyan-400">87%</p>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex gap-2">
            {['active', 'all'].map((opt) => (
              <Button
                key={opt}
                variant={filter === opt ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter(opt)}
              >
                {opt === 'active' ? 'Activas' : 'Todas'}
              </Button>
            ))}
          </div>
          <Button variant="outline">
            <Filter size={18} /> Filtros Avanzados
          </Button>
        </div>

        <div className="space-y-3">
          {filtered.map((alert) => (
            <div
              key={alert.id}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-yellow-600 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <Badge
                  variant={
                    alert.type === 'Crítico'
                      ? 'danger'
                      : alert.type === 'Advertencia'
                      ? 'warning'
                      : 'info'
                  }
                >
                  {alert.type}
                </Badge>
                <span className="text-xs text-gray-500">{alert.timestamp}</span>
              </div>
              <p className="font-medium text-white mb-1">{alert.title}</p>
              <p className="text-sm text-gray-400 mb-3">{alert.description}</p>
              {alert.status === 'Activa' && (
                <Button variant="primary" size="sm">
                  Resolver Ahora
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Crear Automatización de Alertas</h3>
        <div className="space-y-2">
          <Button variant="secondary" className="w-full">
            Constructor Visual de Reglas
          </Button>
          <Button variant="secondary" className="w-full">
            Alertas por Vencimiento
          </Button>
          <Button variant="secondary" className="w-full">
            Alertas por Stock Bajo
          </Button>
        </div>
      </Card>
    </>
  )
}
