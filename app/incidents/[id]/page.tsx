'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { mockIncidents } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function IncidentDetailPage({ params }: { params: { id: string } }) {
  const incident = mockIncidents.find((i) => i.id === params.id)

  if (!incident) {
    return (
      <>
        <Breadcrumbs />
        <Card>
          <p className="text-center text-gray-400 py-8">Incidente no encontrado</p>
        </Card>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/incidents">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{incident.id}</h1>
          <p className="text-gray-400">{incident.title}</p>
        </div>
        <Badge
          variant={
            incident.severity === 'Crítica'
              ? 'danger'
              : incident.severity === 'Alta'
              ? 'warning'
              : 'info'
          }
        >
          {incident.severity}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Información del Incidente</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Título</span>
              <span className="font-medium text-white">{incident.title}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Estado</span>
              <Badge
                variant={
                  incident.status === 'Abierto'
                    ? 'danger'
                    : incident.status === 'En Investigación'
                    ? 'warning'
                    : 'success'
                }
              >
                {incident.status}
              </Badge>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Severidad</span>
              <Badge
                variant={
                  incident.severity === 'Crítica'
                    ? 'danger'
                    : incident.severity === 'Alta'
                    ? 'warning'
                    : 'info'
                }
              >
                {incident.severity}
              </Badge>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Responsable</span>
              <span className="font-medium text-white">{incident.assignedTo}</span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-gray-400">Vencimiento</span>
              <span className="font-medium text-white">{incident.dueDate}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Timeline</h3>
          <div className="space-y-4">
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <p className="text-sm font-medium text-white">Reportado</p>
              <p className="text-xs text-gray-400 mt-1">{incident.createdDate}</p>
            </div>
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <p className="text-sm font-medium text-white">Vencimiento</p>
              <p className="text-xs text-gray-400 mt-1">{incident.dueDate}</p>
            </div>
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <p className="text-sm font-medium text-white">Días restantes</p>
              <p className="text-xs text-yellow-400 mt-1">1 día para vencer</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-400" />
          Descripción
        </h3>
        <p className="text-gray-300">{incident.description}</p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Acciones Correctivas</h3>
        <div className="space-y-3">
          {[
            { action: 'Inspección inicial', status: 'Completado', user: 'Juan P.' },
            { action: 'Análisis de causa raíz', status: 'En Progreso', user: 'Ana G.' },
            { action: 'Plan de acción', status: 'Pendiente', user: 'Supervisora' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-white text-sm">{item.action}</p>
                  <p className="text-xs text-gray-400 mt-1">Por: {item.user}</p>
                </div>
                <Badge
                  variant={
                    item.status === 'Completado'
                      ? 'success'
                      : item.status === 'En Progreso'
                      ? 'info'
                      : 'warning'
                  }
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
