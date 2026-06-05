'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'
import { mockOperations } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function OperationDetailPage({ params }: { params: { id: string } }) {
  const operation = mockOperations.find((o) => o.id === params.id)

  if (!operation) {
    return (
      <>
        <Breadcrumbs />
        <Card>
          <p className="text-center text-gray-400 py-8">Operación no encontrada</p>
        </Card>
      </>
    )
  }

  const isPending = operation.status === 'Pendiente Aprobación'

  return (
    <>
      <Breadcrumbs />

      <Link href="/operations">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{operation.id}</h1>
          <p className="text-gray-400">{operation.type} de {operation.client}</p>
        </div>
        <Badge
          variant={
            operation.status === 'Completado'
              ? 'success'
              : operation.status === 'En Progreso'
              ? 'info'
              : 'warning'
          }
        >
          {operation.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Detalles de la Operación</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Tipo de Operación</span>
              <span className="font-medium text-white">{operation.type}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Cliente</span>
              <span className="font-medium text-white">{operation.client}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Producto</span>
              <span className="font-medium text-white">{operation.product}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Cantidad</span>
              <span className="font-medium text-white">
                {operation.quantity} {operation.unit}
              </span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-gray-400">Responsable</span>
              <span className="font-medium text-white">{operation.assignedTo}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Cronograma</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Fecha</span>
              <span className="font-medium text-white">{operation.date}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Hora Inicio</span>
              <span className="font-mono font-medium text-cyan-400">{operation.startTime}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Hora Fin Estimada</span>
              <span className="font-mono font-medium text-cyan-400">{operation.endTime}</span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-gray-400">Recursos Asignados</span>
              <div className="flex flex-col text-right">
                {operation.resources.map((r) => (
                  <span key={r} className="font-mono text-electric-500 text-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {isPending && (
        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Aprobación Requerida</h3>
          <div className="bg-dark-tertiary p-4 rounded border border-yellow-600 mb-6">
            <p className="text-yellow-200 text-sm">
              Esta operación está pendiente de revisión y aprobación del analista
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="primary">
              <CheckCircle size={18} /> Aprobar Operación
            </Button>
            <Button variant="danger">
              <XCircle size={18} /> Rechazar
            </Button>
          </div>
        </Card>
      )}

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Registro de Actividades</h3>
        <div className="space-y-3">
          {[
            { time: '10:30', action: 'Operación registrada', user: 'Juan Pérez' },
            { time: '10:35', action: 'Recurso asignado', user: 'Sistema' },
            { time: '10:40', action: 'Iniciada', user: 'Carlos M.' },
          ].map((activity, idx) => (
            <div key={idx} className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-white">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">Por: {activity.user}</p>
                </div>
                <span className="text-xs font-mono text-cyan-400">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
