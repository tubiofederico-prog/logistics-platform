'use client'

import Link from 'next/link'
import { Plus, Filter, Eye } from 'lucide-react'
import { mockOperations } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Table } from '@/components/common/Table'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function OperationsPage() {
  const [filter, setFilter] = useState('')

  const filteredOps = mockOperations.filter(
    (op) =>
      op.type.toLowerCase().includes(filter.toLowerCase()) ||
      op.client.toLowerCase().includes(filter.toLowerCase())
  )

  const columns = [
    {
      header: 'ID',
      accessor: 'id' as const,
      width: '100px',
    },
    {
      header: 'Tipo',
      accessor: 'type' as const,
      render: (value: string) => {
        const colors = {
          'Recepción': 'success',
          'Despacho': 'info',
          'Movimiento Interno': 'warning',
        } as Record<string, any>
        return <Badge variant={colors[value] || 'secondary'}>{value}</Badge>
      },
    },
    {
      header: 'Cliente',
      accessor: 'client' as const,
    },
    {
      header: 'Producto',
      accessor: 'product' as const,
    },
    {
      header: 'Cantidad',
      accessor: 'quantity' as const,
      render: (value: number, row: typeof mockOperations[0]) => `${value} ${row.unit}`,
    },
    {
      header: 'Estado',
      accessor: 'status' as const,
      render: (value: string) => {
        const variants = {
          'Completado': 'success',
          'En Progreso': 'info',
          'Pendiente Aprobación': 'warning',
          'Programada': 'secondary',
        } as Record<string, any>
        return <Badge variant={variants[value] || 'secondary'}>{value}</Badge>
      },
    },
    {
      header: 'Responsable',
      accessor: 'assignedTo' as const,
    },
  ]

  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Operaciones Logísticas</h1>
          <p className="text-gray-400">Gestión centralizada de recepciones, despachos y movimientos</p>
        </div>
        <Link href="/operations/new">
          <Button variant="primary">
            <Plus size={18} /> Nueva Operación
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Activas Hoy</p>
            <p className="text-4xl font-bold text-cyan-400">7</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Pendientes Aprobación</p>
            <p className="text-4xl font-bold text-yellow-400">2</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Completadas Hoy</p>
            <p className="text-4xl font-bold text-green-400">12</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Eficiencia Promedio</p>
            <p className="text-4xl font-bold text-electric-500">92%</p>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Buscar por tipo, cliente o producto..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <Button variant="outline">
            <Filter size={18} /> Filtros
          </Button>
        </div>

        <Table
          data={filteredOps}
          columns={columns}
          actions={(row) => (
            <Link href={`/operations/${row.id}`}>
              <Button variant="outline" size="sm">
                <Eye size={16} />
              </Button>
            </Link>
          )}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Acciones Rápidas</h3>
          <div className="space-y-2">
            <Link href="/operations/receptions">
              <Button variant="secondary" className="w-full">
                Recepciones
              </Button>
            </Link>
            <Link href="/operations/dispatches">
              <Button variant="secondary" className="w-full">
                Despachos
              </Button>
            </Link>
            <Link href="/operations/approvals">
              <Button variant="secondary" className="w-full">
                Aprobaciones
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Operaciones Pendientes Aprobación</h3>
          <div className="space-y-2">
            {mockOperations
              .filter((op) => op.status === 'Pendiente Aprobación')
              .map((op) => (
                <div key={op.id} className="p-3 bg-dark-tertiary rounded border border-dark-border">
                  <p className="text-sm font-medium text-white">{op.id}</p>
                  <p className="text-xs text-gray-400 mt-1">{op.product}</p>
                  <Link href={`/operations/${op.id}`}>
                    <Button variant="outline" size="sm" className="mt-2">
                      Revisar
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </>
  )
}
