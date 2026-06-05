'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { mockClients, mockInventoryItems } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function ClientPortalPage({ params }: { params: { id: string } }) {
  const client = mockClients.find((c) => c.id === parseInt(params.id))
  const clientInventory = mockInventoryItems.filter((item) => item.client === client?.name)

  if (!client) {
    return (
      <>
        <Breadcrumbs />
        <Card>
          <p className="text-center text-gray-400 py-8">Cliente no encontrado</p>
        </Card>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/clients">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver a Clientes
        </Button>
      </Link>

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{client.name}</h1>
          <p className="text-gray-400">Portal de cliente • Acceso a información operativa</p>
        </div>
        <Button variant="primary">
          <Download size={18} /> Descargar Reporte
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Total Almacenado</p>
          <p className="text-4xl font-bold text-cyan-400">{clientInventory.reduce((sum, i) => sum + i.quantity, 0)}</p>
          <p className="text-xs text-gray-500 mt-2">Toneladas</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">SKUs Activos</p>
          <p className="text-4xl font-bold text-electric-500">{clientInventory.length}</p>
          <p className="text-xs text-gray-500 mt-2">Productos</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Cumplimiento SLA</p>
          <p className="text-4xl font-bold text-green-400">97.5%</p>
          <p className="text-xs text-green-500 mt-2">Excelente</p>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6">Mi Inventario</h3>
        <div className="space-y-3">
          {clientInventory.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">{item.product}</p>
                  <p className="text-sm text-gray-400 mt-1">Lote: {item.lote}</p>
                </div>
                <Badge variant={item.status === 'Activo' ? 'success' : 'warning'}>
                  {item.status}
                </Badge>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>{item.quantity} {item.unit}</span>
                <span className="text-cyan-400 font-mono">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Acciones Disponibles</h3>
        <div className="space-y-2">
          <Button variant="secondary" className="w-full">
            Ver Movimientos
          </Button>
          <Button variant="secondary" className="w-full">
            Descargar Reporte de SLA
          </Button>
          <Button variant="outline" className="w-full">
            Solicitar Soporte
          </Button>
        </div>
      </Card>
    </>
  )
}
