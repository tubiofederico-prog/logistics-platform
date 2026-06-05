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
    { header: 'ID', accessor: 'id' as const, width: '120px' },
    { header: 'Cliente', accessor: 'client' as const },
    { header: 'Producto', accessor: 'product' as const },
    {
      header: 'Presentación',
      accessor: 'presentation' as const,
      render: (value: string) => <Badge variant="secondary">{value}</Badge>,
    },
    {
      header: 'Cantidad',
      accessor: 'quantity' as const,
      render: (value: number, row: typeof mockInventoryItems[0]) => `${value} ${row.unit}`,
    },
    {
      header: 'Ubicación',
      accessor: 'location' as const,
      render: (value: string) => <span className="font-mono text-[#00d9ff] font-semibold">{value}</span>,
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

      <div className="mb-12 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-white mb-3">Inventario WMS</h1>
          <p className="text-gray-400 text-lg">Gestión centralizada de inventarios multisede</p>
        </div>
        <Link href="/inventory/new-reception">
          <Button variant="primary" size="lg">
            <Plus size={20} /> Registrar Recepción
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-2">Total Toneladas</p>
            <p className="text-4xl font-bold text-[#00d9ff] mb-2">1,595</p>
            <p className="text-xs text-green-400 font-semibold">↑ 120 vs. semana anterior</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-2">SKUs Almacenados</p>
            <p className="text-4xl font-bold text-[#0ea5e9] mb-2">6</p>
            <p className="text-xs text-yellow-400 font-semibold">⚠ 2 en estado crítico</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-2">Ocupación Almacén</p>
            <p className="text-4xl font-bold text-yellow-400 mb-2">65%</p>
            <p className="text-xs text-gray-400">2,675 toneladas disponibles</p>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <div className="flex gap-4 mb-8 flex-wrap">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Buscar por producto, cliente o ubicación..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-[#243447] border border-[#2d435e] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/20 transition-all"
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
                <Eye size={16} /> Ver
              </Button>
            </Link>
          )}
        />
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-bold text-white mb-6">Acciones Rápidas</h3>
          <div className="space-y-3">
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
          <h3 className="text-xl font-bold text-white mb-6">Productos Críticos</h3>
          <div className="space-y-4">
            {mockInventoryItems
              .filter((item) => item.status !== 'Activo')
              .map((item) => (
                <div key={item.id} className="p-4 bg-[#243447] rounded-lg border border-[#2d435e] hover:border-[#00d9ff] transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-white">{item.product}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.client}</p>
                    </div>
                    <Badge variant={item.status === 'Bajo Stock' ? 'warning' : 'danger'}>
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 font-mono">{item.quantity} {item.unit} • {item.location}</p>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </>
  )
}
