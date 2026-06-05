'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Table } from '@/components/common/Table'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

const mockTransfers = [
  {
    id: 'TRF-001',
    product: 'Maíz Blanco',
    quantity: 50,
    from: 'A1-A5',
    to: 'B2-B8',
    status: 'Completado',
    date: '2026-06-05',
  },
  {
    id: 'TRF-002',
    product: 'Aceite de Palma',
    quantity: 30,
    from: 'B2-B4',
    to: 'C3-C5',
    status: 'En Progreso',
    date: '2026-06-05',
  },
]

export default function TransfersPage() {
  const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Producto', accessor: 'product' as const },
    { header: 'Cantidad (Ton)', accessor: 'quantity' as const },
    { header: 'De', accessor: 'from' as const },
    { header: 'Hacia', accessor: 'to' as const },
    {
      header: 'Estado',
      accessor: 'status' as const,
      render: (value: string) => (
        <Badge variant={value === 'Completado' ? 'success' : 'info'}>{value}</Badge>
      ),
    },
    { header: 'Fecha', accessor: 'date' as const },
  ]

  return (
    <>
      <Breadcrumbs />

      <Link href="/inventory">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Movimiento de Inventario</h1>
          <p className="text-gray-400">Transferencias internas entre ubicaciones</p>
        </div>
        <Button variant="primary">
          <Plus size={18} /> Nuevo Movimiento
        </Button>
      </div>

      <Card>
        <Table data={mockTransfers} columns={columns} />
      </Card>
    </>
  )
}
