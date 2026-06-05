'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Download, TrendingUp } from 'lucide-react'
import { mockChartData, mockProductivityData, mockSLAData } from '@/lib/mockData'

const weeklyData = [
  { day: 'Lun', productivity: 92, target: 90 },
  { day: 'Mar', productivity: 89, target: 90 },
  { day: 'Mié', productivity: 94, target: 90 },
  { day: 'Jue', productivity: 87, target: 90 },
  { day: 'Vie', productivity: 96, target: 90 },
  { day: 'Sab', productivity: 85, target: 90 },
]

const COLORS = ['#00d9ff', '#0ea5e9', '#06b6d4', '#0284c7']

export default function KPIsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">KPIs & Analytics</h1>
          <p className="text-gray-400">Dashboard ejecutivo de indicadores clave de desempeño</p>
        </div>
        <Button variant="primary">
          <Download size={18} /> Exportar Reporte
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Cumplimiento SLA</p>
          <p className="text-4xl font-bold text-cyan-400">96.5%</p>
          <p className="text-xs text-green-400 mt-2">↑ 2.1% vs mes anterior</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Productividad Promedio</p>
          <p className="text-4xl font-bold text-electric-500">89%</p>
          <p className="text-xs text-yellow-400 mt-2">↓ 1.2% vs mes anterior</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Eficiencia Operacional</p>
          <p className="text-4xl font-bold text-green-400">92.8%</p>
          <p className="text-xs text-green-400 mt-2">↑ 3.5% vs mes anterior</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Capacidad Utilizada</p>
          <p className="text-4xl font-bold text-yellow-400">65%</p>
          <p className="text-xs text-gray-400 mt-2">2,675 Ton. disponibles</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-cyan-400" />
            Productividad Semanal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d435e" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="productivity" fill="#00d9ff" name="Real (%)" />
              <Bar dataKey="target" fill="#6b7280" name="Meta (%)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Cumplimiento SLA por Cliente</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockSLAData}
                dataKey="sla"
                nameKey="client"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6">Operaciones por Hora</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d435e" />
            <XAxis dataKey="hour" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e' }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend />
            <Line type="monotone" dataKey="received" stroke="#00d9ff" name="Recibidas (Ton)" strokeWidth={2} />
            <Line type="monotone" dataKey="dispatched" stroke="#0ea5e9" name="Despachadas (Ton)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">KPIs Administrativos</h3>
          <div className="space-y-4">
            {[
              { label: 'Tasa de Error', value: '0.8%', trend: '↓ 0.2%' },
              { label: 'Tiempo Promedio Operación', value: '2.5h', trend: '↓ 0.3h' },
              { label: 'Disponibilidad Recursos', value: '87.5%', trend: '↑ 3.2%' },
              { label: 'Satisfacción Cliente', value: '4.7/5', trend: '↑ 0.2' },
            ].map((kpi, idx) => (
              <div key={idx} className="p-3 bg-dark-tertiary rounded border border-dark-border">
                <div className="flex justify-between items-start">
                  <p className="text-gray-300 text-sm">{kpi.label}</p>
                  <div className="text-right">
                    <p className="font-semibold text-white">{kpi.value}</p>
                    <p className="text-xs text-green-400 mt-1">{kpi.trend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Reportes Disponibles</h3>
          <div className="space-y-2">
            <Button variant="secondary" className="w-full">
              Reporte Semanal Ejecutivo
            </Button>
            <Button variant="secondary" className="w-full">
              Reporte Mensual Gerencial
            </Button>
            <Button variant="secondary" className="w-full">
              Análisis Detallado Operacional
            </Button>
            <Button variant="outline" className="w-full">
              Personalizar Reporte
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}
