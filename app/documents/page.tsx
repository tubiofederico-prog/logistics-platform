'use client'

import Link from 'next/link'
import { Plus, FileText } from 'lucide-react'
import { mockDocuments } from '@/lib/mockData'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export default function DocumentsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Gestión Documental Digital</h1>
          <p className="text-gray-400">Biblioteca de formularios y documentos operativos</p>
        </div>
        <Link href="/documents/new">
          <Button variant="primary">
            <Plus size={18} /> Crear Formulario
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Documentos Totales</p>
          <p className="text-4xl font-bold text-cyan-400">{mockDocuments.length}</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Formularios Activos</p>
          <p className="text-4xl font-bold text-electric-500">4</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Última Actualización</p>
          <p className="text-lg font-bold text-green-400">Hace 2 días</p>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <FileText size={20} className="text-cyan-400" />
          Documentos y Formularios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="p-4 bg-dark-tertiary rounded border border-dark-border hover:border-cyan-400 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-medium text-white">{doc.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{doc.category}</p>
                </div>
                <Badge variant="secondary">{doc.type}</Badge>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>v{doc.version}</span>
                <span>{doc.createdDate}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Acciones Rápidas</h3>
        <div className="space-y-2">
          <Button variant="secondary" className="w-full">
            Constructor Visual de Formularios
          </Button>
          <Button variant="secondary" className="w-full">
            Importar Documento
          </Button>
          <Button variant="outline" className="w-full">
            Ver Historial de Versiones
          </Button>
        </div>
      </Card>
    </>
  )
}
