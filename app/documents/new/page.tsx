'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function NewDocumentPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    type: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Documento creado exitosamente.')
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/documents">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Crear Nuevo Formulario</h1>
        <p className="text-gray-400">Constructor visual de formularios operativos digitales</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nombre del Documento *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Formato Recepción de Mercancía"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Categoría *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar categoría</option>
                <option>Operativo</option>
                <option>Incidentes</option>
                <option>Referencia</option>
                <option>Administrativo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Documento *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option>Formulario</option>
                <option>Documento</option>
                <option>Manual</option>
                <option>Guía</option>
              </select>
            </div>
          </div>

          <div className="border-t border-dark-border mt-6 pt-6 flex gap-3">
            <Button type="submit" variant="primary">
              Crear Documento
            </Button>
            <Button type="button" variant="outline" onClick={() => window.history.back()}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
