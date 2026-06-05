'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function DispatchPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Despacho Inteligente FIFO</h1>
          <p className="text-gray-400">Sistema automático de despacho por antigüedad de lote</p>
        </div>
        <Button variant="primary">
          <Plus size={18} /> Crear Despacho
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Despachables Hoy</p>
          <p className="text-4xl font-bold text-cyan-400">850</p>
          <p className="text-xs text-gray-500 mt-2">Toneladas listas</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Lotes Próximos a Vencer</p>
          <p className="text-4xl font-bold text-yellow-400">3</p>
          <p className="text-xs text-gray-500 mt-2">Requieren atención</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Despachos Esta Semana</p>
          <p className="text-4xl font-bold text-green-400">12</p>
          <p className="text-xs text-gray-500 mt-2">Completados</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Lotes Recomendados para Despacho</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">Maíz Blanco - Lote MAIZ-2026-001</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Grupo Agroindustrial • 100 toneladas • Recibido: 2026-04-15
                  </p>
                </div>
                <Badge variant="warning">Próximo a vencer</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="primary" size="sm">
                  Despachar Ahora
                </Button>
                <Button variant="outline" size="sm">
                  Ver Detalle
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
