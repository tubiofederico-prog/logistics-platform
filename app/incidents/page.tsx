'use client'

import Link from 'next/link'
import { Plus, Filter, Eye } from 'lucide-react'
import { mockIncidents } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Table } from '@/components/common/Table'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function IncidentsPage() {
  const [filter, setFilter] = useState('')

  const filteredIncidents = mockIncidents.filter(
    (inc) =>
      inc.title.toLowerCase().includes(filter.toLowerCase()) ||
      inc.severity.toLowerCase().includes(filter.toLowerCase())
  )

  const columns = [
    {
      header: 'ID',
      accessor: 'id' as const,
      width: '100px',
    },
    {
      header: 'Título',
      accessor: 'title' as const,
    },
    {
      header: 'Severidad',
      accessor: 'severity' as const,
      render: (value: string) => {
        const variants = {
          'Alta': 'warning',
          'Crítica': 'danger',
          'Baja': 'info',
        } as Record<string, any>
        return <Badge variant={variants[value] || 'secondary'}>{value}</Badge>
      },
    },
    {
      header: 'Estado',
      accessor: 'status' as const,
      render: (value: string) => {
        const variants = {
          'Abierto': 'danger',
          'En Investigación': 'warning',
          'Resuelto': 'success',
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
          <h1 className="text-3xl font-bold text-white mb-2">Incidentes</h1>
          <p className="text-gray-400">Registro y seguimiento de incidentes operativos</p>
        </div>
        <Link href="/incidents/new">
          <Button variant="primary">
            <Plus size={18} /> Reportar Incidente
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Abiertos</p>
          <p className="text-4xl font-bold text-red-400">2</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">En Investigación</p>
          <p className="text-4xl font-bold text-yellow-400">1</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Resueltos Este Mes</p>
          <p className="text-4xl font-bold text-green-400">8</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Tiempo Promedio Resolución</p>
          <p className="text-3xl font-bold text-cyan-400">2.4 días</p>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Buscar por título o descripción..."
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
          data={filteredIncidents}
          columns={columns}
          actions={(row) => (
            <Link href={`/incidents/${row.id}`}>
              <Button variant="outline" size="sm">
                <Eye size={16} />
              </Button>
            </Link>
          )}
        />
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Estadísticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Total Incidentes (30 días)', value: '11', color: 'cyan' },
            { label: 'Críticos Resueltos', value: '100%', color: 'green' },
            { label: 'Tiempo Promedio', value: '2.4d', color: 'electric' },
          ].map((stat, idx) => (
            <div key={idx} className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
