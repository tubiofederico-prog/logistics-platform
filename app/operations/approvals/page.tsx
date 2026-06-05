'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function ApprovalsPage() {
  return (
    <>
      <Breadcrumbs />

      <Link href="/operations">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Aprobaciones de Operaciones</h1>
        <p className="text-gray-400">Operaciones pendientes de revisión y aprobación</p>
      </div>

      <Card className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">Pendientes de Aprobación</p>
            <p className="text-5xl font-bold text-yellow-400">2</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Aprobadas Este Mes</p>
            <p className="text-5xl font-bold text-green-400">45</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Operaciones Requieren Aprobación</h3>
        <div className="space-y-3">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="p-4 bg-dark-tertiary rounded border border-yellow-600 hover:border-yellow-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-white">OP-00{idx}</p>
                  <p className="text-sm text-gray-300 mt-1">
                    {idx === 1
                      ? 'Movimiento Interno • Conservas del Atlántico'
                      : 'Recepción • Químicos Industriales'}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {idx === 1 ? '50 toneladas de Tomate' : '95 toneladas de Sulfato'}
                  </p>
                </div>
                <Badge variant="warning">Requiere Aprobación</Badge>
              </div>
              <div className="bg-dark-primary p-3 rounded mb-3 text-sm text-gray-300">
                <p>Notas: {idx === 1 ? 'Mudanza entre ubicaciones sin cliente directo' : 'Revisión de documentación pendiente'}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="primary" size="sm">
                  <CheckCircle size={16} /> Aprobar
                </Button>
                <Button variant="danger" size="sm">
                  <XCircle size={16} /> Rechazar
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
