'use client'

import Link from 'next/link'
import { Eye, BarChart3 } from 'lucide-react'
import { mockClients } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function ClientsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Portal de Clientes</h1>
        <p className="text-gray-400">Acceso de clientes a información operativa y reportes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Clientes Activos</p>
          <p className="text-4xl font-bold text-cyan-400">{mockClients.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Toneladas Almacenadas</p>
          <p className="text-4xl font-bold text-electric-500">
            {mockClients.reduce((sum, c) => sum + c.tonnage, 0)}
          </p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Cumplimiento SLA Global</p>
          <p className="text-4xl font-bold text-green-400">96.5%</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockClients.map((client) => (
            <div
              key={client.id}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-white">{client.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{client.category}</p>
                </div>
                <Badge variant="success">Activo</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-3">Almacenado: {client.tonnage} Ton</p>
              <Link href={`/clients/${client.id}`}>
                <Button variant="outline" size="sm" className="w-full">
                  <Eye size={16} /> Ver Portal
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
