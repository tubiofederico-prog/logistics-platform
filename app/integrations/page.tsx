'use client'

import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Plug, CheckCircle, AlertCircle } from 'lucide-react'

const integrations = [
  {
    name: 'WMS Actual',
    type: 'Sistema Interno',
    status: 'Conectado',
    lastSync: '2026-06-05 14:30',
    color: 'success',
  },
  {
    name: 'ERP Corporativo',
    type: 'SAP',
    status: 'Sincronizando',
    lastSync: '2026-06-05 14:00',
    color: 'info',
  },
  {
    name: 'Sistema de Transporte',
    type: 'Logistics Platform',
    status: 'Desconectado',
    lastSync: '2026-06-04 10:20',
    color: 'warning',
  },
  {
    name: 'Email Marketing',
    type: 'SendGrid',
    status: 'Conectado',
    lastSync: '2026-06-05 15:15',
    color: 'success',
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Integraciones</h1>
        <p className="text-gray-400">Sincronización y conexión con sistemas empresariales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Sistemas Conectados</p>
          <p className="text-4xl font-bold text-green-400">3</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Integraciones Activas</p>
          <p className="text-4xl font-bold text-cyan-400">4</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Última Sincronización</p>
          <p className="text-lg font-bold text-electric-500">Hace 5 min</p>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Plug size={20} className="text-cyan-400" />
          Sistemas Integrados
        </h3>
        <div className="space-y-3">
          {integrations.map((integration, idx) => (
            <div key={idx} className="p-4 bg-dark-tertiary rounded border border-dark-border">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-white">{integration.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{integration.type}</p>
                </div>
                <Badge
                  variant={
                    integration.color === 'success'
                      ? 'success'
                      : integration.color === 'info'
                      ? 'info'
                      : 'warning'
                  }
                >
                  {integration.status}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mb-3">Última sincronización: {integration.lastSync}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  {integration.status === 'Conectado' ? '↻ Sincronizar' : 'Conectar'}
                </Button>
                <Button variant="outline" size="sm">
                  Configurar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Integraciones Disponibles</h3>
          <div className="space-y-2">
            <Button variant="secondary" className="w-full">
              Agregar Nueva Integración
            </Button>
            <Button variant="secondary" className="w-full">
              Ver API Documentation
            </Button>
            <Button variant="outline" className="w-full">
              Gestionar Webhooks
            </Button>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Logs de Sincronización</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {[
              { time: '14:30', status: 'success', message: 'Sincronización WMS completada' },
              { time: '14:00', status: 'success', message: 'Datos ERP actualizados' },
              { time: '13:45', status: 'error', message: 'Error en Sistema de Transporte' },
              { time: '13:30', status: 'success', message: 'Email notificación enviada' },
            ].map((log, idx) => (
              <div key={idx} className="p-2 bg-dark-primary rounded border border-dark-border text-xs">
                <div className="flex gap-2 items-start">
                  {log.status === 'success' ? (
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-gray-300">{log.message}</p>
                    <p className="text-gray-500 text-xs">{log.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}
