'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function ReceptionsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Recepciones</h1>
          <p className="text-gray-400">Ingreso y registro de mercancías</p>
        </div>
        <Link href="/operations/new">
          <Button variant="primary">
            <Plus size={18} /> Nueva Recepción
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Hoy</p>
          <p className="text-4xl font-bold text-cyan-400">3</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Esta Semana</p>
          <p className="text-4xl font-bold text-electric-500">12</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Toneladas Recibidas Hoy</p>
          <p className="text-4xl font-bold text-green-400">450</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Recepciones Recientes</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">OP-{String(idx).padStart(3, '0')}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {idx === 1
                      ? 'Maíz Blanco • Grupo Agroindustrial'
                      : idx === 2
                      ? 'Aceite de Palma • Palmera del Pacífico'
                      : 'Tomate Procesado • Conservas'}
                  </p>
                </div>
                <Badge variant="success">Completado</Badge>
              </div>
              <p className="text-xs text-gray-500">
                {idx === 1 ? '450' : idx === 2 ? '320' : '150'} toneladas • 2026-06-0{idx + 2}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
