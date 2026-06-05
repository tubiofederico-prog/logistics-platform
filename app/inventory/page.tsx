'use client'

import Link from 'next/link'
import { Plus, Filter, Download, Eye } from 'lucide-react'
import { mockInventoryItems } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Table } from '@/components/common/Table'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function InventoryPage() {
  const [filter, setFilter] = useState('')

  const filteredItems = mockInventoryItems.filter(
    (item) =>
      item.product.toLowerCase().includes(filter.toLowerCase()) ||
      item.client.toLowerCase().includes(filter.toLowerCase())
  )

  const columns = [
    {
      header: 'ID',
      accessor: 'id' as const,
      width: '100px',
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
      header: 'Presentación',
      accessor: 'presentation' as const,
      render: (value: string) => (
        <Badge variant="secondary">{value}</Badge>
      ),
    },
    {
      header: 'Cantidad',
      accessor: 'quantity' as const,
      render: (value: number, row: typeof mockInventoryItems[0]) => `${value} ${row.unit}`,
    },
    {
      header: 'Ubicación',
      accessor: 'location' as const,
      render: (value: string) => (
        <span className="font-mono text-cyan-400">{value}</span>
      ),
    },
    {
      header: 'Estado',
      accessor: 'status' as const,
      render: (value: string) => {
        const variants = {
          'Activo': 'success',
          'Bajo Stock': 'warning',
          'Crítico': 'danger',
        } as Record<string, any>
        return <Badge variant={variants[value] || 'secondary'}>{value}</Badge>
      },
    },
  ]

  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Inventario WMS</h1>
          <p className="text-gray-400">Gestión centralizada de inventarios multisede</p>
        </div>
        <Link href="/inventory/new-reception">
          <Button variant="primary">
            <Plus size={18} /> Registrar Recepción
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Total Toneladas</p>
            <p className="text-4xl font-bold text-cyan-400">1,595</p>
            <p className="text-xs text-gray-500 mt-2">+120 vs. semana anterior</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">SKUs Almacenados</p>
            <p className="text-4xl font-bold text-electric-500">6</p>
            <p className="text-xs text-gray-500 mt-2">2 en estado crítico</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Ocupación Almacén</p>
            <p className="text-4xl font-bold text-yellow-400">65%</p>
            <p className="text-xs text-gray-500 mt-2">2,675 toneladas disponibles</p>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Buscar por producto, cliente o ubicación..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <Button variant="outline">
            <Filter size={18} /> Filtros Avanzados
          </Button>
          <Button variant="outline">
            <Download size={18} /> Exportar
          </Button>
        </div>

        <Table
          data={filteredItems}
          columns={columns}
          actions={(row) => (
            <Link href={`/inventory/${row.id}`}>
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
            <Link href="/inventory/transfers">
              <Button variant="secondary" className="w-full">
                Mover Inventario
              </Button>
            </Link>
            <Link href="/inventory/dispatch">
              <Button variant="secondary" className="w-full">
                Despachar por FIFO
              </Button>
            </Link>
            <Link href="/inventory/adjustments">
              <Button variant="secondary" className="w-full">
                Ajustes de Inventario
              </Button>
            </Link>
            <Link href="/inventory/traceability">
              <Button variant="outline" className="w-full">
                Ver Trazabilidad
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Productos Críticos</h3>
          <div className="space-y-3">
            {mockInventoryItems
              .filter((item) => item.status !== 'Activo')
              .map((item) => (
                <div key={item.id} className="p-3 bg-dark-tertiary rounded border border-dark-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-white text-sm">{item.product}</p>
                      <p className="text-xs text-gray-400">{item.client}</p>
                    </div>
                    <Badge variant={item.status === 'Bajo Stock' ? 'warning' : 'danger'}>
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">{item.quantity} {item.unit} • {item.location}</p>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </>
  )
}
