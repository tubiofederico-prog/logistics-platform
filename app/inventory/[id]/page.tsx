'use client'

import Link from 'next/link'
import { ArrowLeft, AlertTriangle, Download } from 'lucide-react'
import { mockInventoryItems } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

const mockHistory = [
  { date: '2026-06-05 10:30', action: 'Movimiento', detail: 'Trasladado de A1 a A5', user: 'Carlos M.' },
  { date: '2026-06-04 14:15', action: 'Recepción', detail: 'Ingreso de 100 toneladas', user: 'Ana G.' },
  { date: '2026-05-28 08:00', action: 'Recepción Inicial', detail: 'Ingreso de 450 toneladas', user: 'Juan P.' },
]

export default function InventoryDetailPage({ params }: { params: { id: string } }) {
  const item = mockInventoryItems.find((i) => i.id === params.id)

  if (!item) {
    return (
      <>
        <Breadcrumbs />
        <Card>
          <p className="text-center text-gray-400 py-8">Producto no encontrado</p>
        </Card>
      </>
    )
  }

  const daysToExpiry = Math.floor(
    (new Date(item.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <>
      <Breadcrumbs />

      <Link href="/inventory">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver al inventario
        </Button>
      </Link>

      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{item.product}</h1>
            <p className="text-gray-400">Lote: {item.lote}</p>
          </div>
          <Badge
            variant={
              item.status === 'Activo'
                ? 'success'
                : item.status === 'Bajo Stock'
                ? 'warning'
                : 'danger'
            }
          >
            {item.status}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-2">Cliente</p>
          <p className="text-xl font-semibold text-white">{item.client}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Cantidad Total</p>
          <p className="text-xl font-semibold text-white">
            {item.quantity} <span className="text-gray-400">{item.unit}</span>
          </p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-2">Ubicación</p>
          <p className="text-xl font-mono font-semibold text-cyan-400">{item.location}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Información Detallada</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Presentación</span>
              <span className="font-medium text-white">{item.presentation}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Fecha de Recepción</span>
              <span className="font-medium text-white">{item.receivedDate}</span>
            </div>
            <div className="flex justify-between border-b border-dark-border pb-3">
              <span className="text-gray-400">Fecha de Vencimiento</span>
              <span className="font-medium text-white">{item.expiryDate}</span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-gray-400">Días para Vencer</span>
              <span
                className={`font-medium ${
                  daysToExpiry <= 30
                    ? daysToExpiry <= 7
                      ? 'text-red-400'
                      : 'text-yellow-400'
                    : 'text-green-400'
                }`}
              >
                {daysToExpiry} días
              </span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Acciones</h3>
          <div className="space-y-2">
            <Button variant="primary" className="w-full">
              Mover Inventario
            </Button>
            <Button variant="secondary" className="w-full">
              Despachar
            </Button>
            <Button variant="outline" className="w-full">
              <Download size={18} /> Descargar Acta
            </Button>
            <Link href="/incidents/new">
              <Button variant="danger" className="w-full">
                Reportar Discrepancia
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <AlertTriangle size={20} className="text-yellow-400" />
          Historial y Trazabilidad
        </h3>
        <div className="space-y-4">
          {mockHistory.map((record, idx) => (
            <div key={idx} className="p-4 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-white">{record.action}</p>
                  <p className="text-sm text-gray-400 mt-1">{record.detail}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-cyan-400">{record.date}</p>
                  <p className="text-xs text-gray-500 mt-1">Por: {record.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
