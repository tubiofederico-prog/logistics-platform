'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function TraceabilityPage() {
  return (
    <>
      <Breadcrumbs />

      <Link href="/inventory">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Trazabilidad Completa</h1>
        <p className="text-gray-400">Seguimiento de productos desde recepción hasta despacho</p>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Buscar Producto</h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ingrese lote, SKU o cliente..."
            className="flex-1 bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          />
          <Button variant="primary">Buscar</Button>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Línea de Tiempo - Maíz Blanco (MAIZ-2026-001)</h3>
        <div className="space-y-4 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-electric-500"></div>

          {[
            {
              date: '2026-04-15 08:00',
              action: 'Recepción',
              detail: 'Ingreso de 450 toneladas',
              location: 'Puerta A',
            },
            {
              date: '2026-04-15 10:30',
              action: 'Pesaje',
              detail: 'Confirmación de peso',
              location: 'Balanza A',
            },
            {
              date: '2026-04-15 12:00',
              action: 'Almacenamiento',
              detail: 'Traslado a ubicación A1-A12',
              location: 'Almacén Principal',
            },
            {
              date: '2026-05-10 14:00',
              action: 'Movimiento',
              detail: 'Redistribución a A5',
              location: 'Almacén Principal',
            },
            {
              date: '2026-06-05 10:30',
              action: 'Despacho',
              detail: 'Salida de 100 toneladas',
              location: 'Puerta B',
            },
          ].map((event, idx) => (
            <div key={idx} className="flex gap-4 pl-20">
              <div className="pt-1">
                <div className="absolute -left-12 w-6 h-6 bg-dark-secondary border-2 border-cyan-400 rounded-full"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="font-semibold text-cyan-400">{event.action}</p>
                <p className="text-sm text-gray-300 mt-1">{event.detail}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {event.date} • {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
