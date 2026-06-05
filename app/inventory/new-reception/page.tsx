'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { useState } from 'react'

export default function NewReceptionPage() {
  const [formData, setFormData] = useState({
    client: '',
    product: '',
    presentation: '',
    quantity: '',
    location: '',
    lote: '',
    expiryDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Recepción registrada exitosamente. Este es un prototipo visual.')
  }

  return (
    <>
      <Breadcrumbs />

      <Link href="/inventory">
        <Button variant="outline" className="mb-6">
          <ArrowLeft size={18} /> Volver
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Registrar Nueva Recepción</h1>
        <p className="text-gray-400">Formulario digital para ingreso de mercancías</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cliente *</label>
              <select
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar cliente</option>
                <option>Grupo Agroindustrial del Cauca</option>
                <option>Palmera del Pacífico S.A.</option>
                <option>Conservas del Atlántico</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Producto *</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Ej: Maíz Blanco"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Presentación *</label>
              <select
                name="presentation"
                value={formData.presentation}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                required
              >
                <option value="">Seleccionar presentación</option>
                <option>Granel</option>
                <option>Big Bag</option>
                <option>Sacos</option>
                <option>Rollos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cantidad (Toneladas) *</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Ej: 100"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ubicación Destino *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ej: A1-A12"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Lote / Referencia *</label>
              <input
                type="text"
                name="lote"
                value={formData.lote}
                onChange={handleChange}
                placeholder="Ej: MAIZ-2026-001"
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Fecha de Vencimiento</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full bg-dark-tertiary border border-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="border-t border-dark-border pt-6 flex gap-3">
            <Button type="submit" variant="primary">
              Registrar Recepción
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
