'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function DispatchesPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Despachos</h1>
          <p className="text-gray-400">Salidas de mercancías a clientes</p>
        </div>
        <Link href="/operations/new">
          <Button variant="primary">
            <Plus size={18} /> Nuevo Despacho
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Hoy</p>
          <p className="text-4xl font-bold text-cyan-400">5</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Pendientes</p>
          <p className="text-4xl font-bold text-yellow-400">2</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Toneladas Despachadas</p>
          <p className="text-4xl font-bold text-green-400">320</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Despachos Programados</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">DP-{String(idx + 100).padStart(3, '0')}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {idx === 1 ? 'Para: Retailer XYZ' : idx === 2 ? 'Para: Distribuidor Nacional' : 'Para: Exportadora'}
                  </p>
                </div>
                <Badge variant={idx === 1 ? 'info' : 'warning'}>
                  {idx === 1 ? 'En Progreso' : 'Pendiente'}
                </Badge>
              </div>
              <p className="text-xs text-gray-500">
                {idx === 1 ? '80 toneladas • Hoy 14:30' : idx === 2 ? '120 toneladas • Mañana 08:00' : '60 toneladas • 2026-06-07'}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
