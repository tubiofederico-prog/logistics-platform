'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function AdjustmentsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Ajustes de Inventario</h1>
          <p className="text-gray-400">Correcciones y reconciliaciones de stock</p>
        </div>
        <Button variant="primary">
          <Plus size={18} /> Nuevo Ajuste
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Ajustes Este Mes</p>
          <p className="text-4xl font-bold text-cyan-400">8</p>
          <p className="text-xs text-gray-500 mt-2">Correctivos registrados</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Discrepancias Pendientes</p>
          <p className="text-4xl font-bold text-yellow-400">2</p>
          <p className="text-xs text-gray-500 mt-2">Requieren investigación</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Ajustes Recientes</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">
                    {idx === 1 ? 'Discrepancia en ubicación C3' : idx === 2 ? 'Sobrante detectado' : 'Ajuste por vencimiento'}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {idx === 1
                      ? '20 toneladas no coinciden con registro • Tomate Procesado'
                      : idx === 2
                      ? '5 toneladas de más en ubicación A1'
                      : '30 toneladas fuera de servicio'}
                  </p>
                </div>
                <Badge variant={idx === 1 ? 'danger' : 'warning'}>
                  {idx === 1 ? 'Crítico' : 'Pendiente'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
