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
  LineChart,
  Line,
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
    {
      header: 'Operación',
      accessor: 'id' as const,
    },
    {
      header: 'Tipo',
      accessor: 'type' as const,
    },
    {
      header: 'Cliente',
      accessor: 'client' as const,
    },
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
    {
      header: 'Responsable',
      accessor: 'assignedTo' as const,
    },
  ]

  const alertColumns = [
    {
      header: 'Tipo',
      accessor: 'type' as const,
      render: (value: string) => {
        const variants = {
          'Crítico': 'danger',
          'Advertencia': 'warning',
          'Información': 'info',
        } as Record<string, any>
        return <Badge variant={variants[value] || 'secondary'}>{value}</Badge>
      },
    },
    {
      header: 'Título',
      accessor: 'title' as const,
    },
    {
      header: 'Hora',
      accessor: 'timestamp' as const,
      render: (value: string) => value.split(' ')[1],
    },
  ]

  const COLORS = ['#00d9ff', '#0ea5e9', '#06b6d4']

  return (
    <>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Torre de Control</h1>
        <p className="text-gray-400">Resumen operativo en tiempo real • Última actualización: Hace 2 minutos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <TrendingUp size={20} className="text-cyan-400" />
              Operaciones por Hora
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d435e" />
              <XAxis dataKey="hour" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #2d435e' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="received" fill="#00d9ff" name="Recibidas" />
              <Bar dataKey="dispatched" fill="#0ea5e9" name="Despachadas" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap size={20} className="text-cyan-400" />
              Productividad por Turno
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockProductivityData}
                dataKey="productivity"
                nameKey="shift"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <AlertTriangle size={20} className="text-yellow-400" />
              Alertas Activas
            </h2>
            <Link href="/alerts">
              <Button variant="outline" size="sm">
                Ver todas
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {mockAlerts.slice(0, 3).map((alert) => (
              <div key={alert.id} className="p-3 bg-dark-tertiary rounded border border-dark-border hover:border-yellow-600 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
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
                    </div>
                    <p className="font-medium text-white text-sm">{alert.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{alert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity size={20} className="text-cyan-400" />
              Recursos Disponibles
            </h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-white">Montacargas Operativos</p>
                <Badge variant="success">3 de 4</Badge>
              </div>
              <div className="w-full bg-dark-primary rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-white">Operarios Disponibles</p>
                <Badge variant="success">15 de 18</Badge>
              </div>
              <div className="w-full bg-dark-primary rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
            <div className="p-3 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-white">Capacidad del Almacén</p>
                <Badge variant="warning">65% Ocupado</Badge>
              </div>
              <div className="w-full bg-dark-primary rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Activity size={20} className="text-cyan-400" />
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/operations">
          <Card className="hover:shadow-xl transition-all h-full">
            <div className="text-center">
              <div className="text-4xl mb-2">7</div>
              <p className="text-gray-400 font-medium">Operaciones Activas</p>
              <Button variant="secondary" size="sm" className="mt-4 w-full">
                Ver detalle
              </Button>
            </div>
          </Card>
        </Link>

        <Link href="/alerts">
          <Card className="hover:shadow-xl transition-all h-full">
            <div className="text-center">
              <div className="text-4xl mb-2 text-yellow-400">3</div>
              <p className="text-gray-400 font-medium">Alertas Críticas</p>
              <Button variant="danger" size="sm" className="mt-4 w-full">
                Revisar ahora
              </Button>
            </div>
          </Card>
        </Link>

        <Link href="/kpis">
          <Card className="hover:shadow-xl transition-all h-full">
            <div className="text-center">
              <div className="text-4xl mb-2 text-green-400">96.5%</div>
              <p className="text-gray-400 font-medium">Cumplimiento SLA</p>
              <Button variant="primary" size="sm" className="mt-4 w-full">
                Explorar KPIs
              </Button>
            </div>
          </Card>
        </Link>
      </div>
    </>
  )
}
