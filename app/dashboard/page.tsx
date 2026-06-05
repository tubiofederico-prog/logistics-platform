'use client'

import Link from 'next/link'
import {
  TrendingUp,
  Package,
  TrendingDown,
  AlertTriangle,
  Activity,
  Zap,
  ArrowRight,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { StatCard } from '@/components/common/StatCard'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Table } from '@/components/common/Table'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { mockKPIs, mockChartData, mockOperations, mockAlerts, mockProductivityData } from '@/lib/mockData'

export default function DashboardPage() {
  const operationColumns = [
    { header: 'Operación', accessor: 'id' as const },
    { header: 'Tipo', accessor: 'type' as const },
    { header: 'Cliente', accessor: 'client' as const },
    {
      header: 'Cantidad',
      accessor: 'quantity' as const,
      render: (value: number, row: typeof mockOperations[0]) => `${value} ${row.unit}`,
    },
    {
      header: 'Estado',
      accessor: 'status' as const,
      render: (value: string) => {
        const variants = {
          'Completado': 'success',
          'En Progreso': 'info',
          'Pendiente Aprobación': 'warning',
          'Programada': 'secondary',
        } as Record<string, any>
        return <Badge variant={variants[value] || 'secondary'}>{value}</Badge>
      },
    },
    { header: 'Responsable', accessor: 'assignedTo' as const },
  ]

  const COLORS = ['#00d9ff', '#0ea5e9', '#06b6d4']

  return (
    <>
      <Breadcrumbs />

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">Torre de Control</h1>
        <p className="text-gray-400 text-lg">Resumen operativo en tiempo real • Última actualización: Hace 2 minutos</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Link href="/inventory">
          <StatCard
            title="Toneladas Recibidas"
            value={mockKPIs.receivedTonnage}
            unit="Ton"
            icon={<TrendingUp />}
            trend={12}
          />
        </Link>
        <Link href="/inventory">
          <StatCard
            title="Toneladas Despachadas"
            value={mockKPIs.dispatchedTonnage}
            unit="Ton"
            icon={<TrendingDown />}
            trend={8}
          />
        </Link>
        <Link href="/inventory">
          <StatCard
            title="Inventario Total"
            value={mockKPIs.totalInventory}
            unit="Ton"
            icon={<Package />}
            trend={-3}
          />
        </Link>
        <Link href="/kpis">
          <StatCard
            title="Cumplimiento SLA"
            value={mockKPIs.slaCompliance}
            unit="%"
            icon={<Activity />}
            trend={2}
          />
        </Link>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <TrendingUp size={24} className="text-[#00d9ff]" />
              Operaciones por Hora
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d435e" />
              <XAxis dataKey="hour" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="received" fill="#00d9ff" name="Recibidas" radius={[4, 4, 0, 0]} />
              <Bar dataKey="dispatched" fill="#0ea5e9" name="Despachadas" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Zap size={24} className="text-[#00d9ff]" />
              Productividad por Turno
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={mockProductivityData}
                dataKey="productivity"
                nameKey="shift"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={(entry: any) => `${entry.value}%`}
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Alerts and Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <AlertTriangle size={24} className="text-yellow-400" />
              Alertas Críticas
            </h2>
            <Link href="/alerts">
              <Button variant="outline" size="sm">
                Ver todas
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {mockAlerts.slice(0, 3).map((alert) => (
              <div
                key={alert.id}
                className="p-4 bg-[#243447] rounded-lg border border-[#2d435e] hover:border-[#00d9ff] transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={
                      alert.type === 'Crítico'
                        ? 'danger'
                        : alert.type === 'Advertencia'
                        ? 'warning'
                        : 'info'
                    }
                  >
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="font-semibold text-white">{alert.title}</p>
                <p className="text-sm text-gray-400 mt-2">{alert.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
            <Activity size={24} className="text-[#00d9ff]" />
            Recursos Disponibles
          </h2>
          <div className="space-y-5">
            {[
              { label: 'Montacargas Operativos', value: '3 de 4', percentage: 75, color: 'bg-green-500' },
              { label: 'Operarios Disponibles', value: '15 de 18', percentage: 83, color: 'bg-blue-500' },
              { label: 'Capacidad del Almacén', value: '65% Ocupado', percentage: 65, color: 'bg-yellow-500' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-[#243447] rounded-lg border border-[#2d435e]">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <Badge variant="info">{item.value}</Badge>
                </div>
                <div className="w-full bg-[#1a2332] rounded-full h-2 overflow-hidden">
                  <div className={`${item.color} h-2 rounded-full transition-all`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Operations Table */}
      <Card className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <Activity size={24} className="text-[#00d9ff]" />
            Operaciones Recientes
          </h2>
          <Link href="/operations">
            <Button variant="outline" size="sm">
              Ver todas <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        <Table data={mockOperations} columns={operationColumns} />
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/operations">
          <Card className="hover:shadow-2xl transition-all duration-300 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00d9ff] mb-3">7</div>
              <p className="text-gray-400 font-semibold mb-6">Operaciones Activas</p>
              <Button variant="secondary" size="md" className="w-full">
                Ver detalle
              </Button>
            </div>
          </Card>
        </Link>

        <Link href="/alerts">
          <Card className="hover:shadow-2xl transition-all duration-300 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-3">3</div>
              <p className="text-gray-400 font-semibold mb-6">Alertas Críticas</p>
              <Button variant="danger" size="md" className="w-full">
                Revisar ahora
              </Button>
            </div>
          </Card>
        </Link>

        <Link href="/kpis">
          <Card className="hover:shadow-2xl transition-all duration-300 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">96.5%</div>
              <p className="text-gray-400 font-semibold mb-6">Cumplimiento SLA</p>
              <Button variant="primary" size="md" className="w-full">
                Explorar KPIs
              </Button>
            </div>
          </Card>
        </Link>
      </div>
    </>
  )
}
