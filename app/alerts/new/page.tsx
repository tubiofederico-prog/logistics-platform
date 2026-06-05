'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function NewAlertPage() {
  const [formData, setFormData] = useState({
    name: '',
    condition: '',
    action: '',
    priority: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Alerta creada exitosamente.')
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/alerts">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Crear Nueva Alerta</h1>
        <p className="text-gray-400">Constructor visual de reglas de alertas</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nombre de la Alerta *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Stock Crítico Maíz"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Condición *</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar condición</option>
                <option>Stock menor que 100 Toneladas</option>
                <option>Días para vencer menor que 30</option>
                <option>Operación retrasada más de 1 hora</option>
                <option>Equipo fuera de servicio</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Acción a Ejecutar *</label>
              <select
                name="action"
                value={formData.action}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar acción</option>
                <option>Enviar notificación al supervisor</option>
                <option>Enviar correo electrónico</option>
                <option>Enviar WhatsApp</option>
                <option>Generar ticket de incidente</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Prioridad *</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar prioridad</option>
                <option>Crítica</option>
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>
          </div>

          <div className="border-t border-dark-border mt-6 pt-6 flex gap-3">
            <Button type="submit" variant="primary">
              Crear Alerta
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
