'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function NewIncidentPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
    assignedTo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Incidente registrado exitosamente.')
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/incidents">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Reportar Nuevo Incidente</h1>
        <p className="text-gray-400">Registro de problemas operativos para seguimiento y resolución</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Título del Incidente *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Resumen del problema"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Descripción Detallada *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe el incidente con todo detalle..."
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                rows={5}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Severidad *</label>
              <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar severidad</option>
                <option>Crítica</option>
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Asignar a</label>
              <select
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="">Seleccionar responsable</option>
                <option>Supervisor Turno A</option>
                <option>Analista Inventario</option>
                <option>Coordinador Operativo</option>
              </select>
            </div>
          </div>

          <div className="border-t border-dark-border mt-6 pt-6 flex gap-3">
            <Button type="submit" variant="primary">
              Registrar Incidente
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
