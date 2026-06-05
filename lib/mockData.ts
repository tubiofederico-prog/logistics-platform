export const mockClients = [
  { id: 1, name: 'Grupo Agroindustrial del Cauca', category: 'Granos', tonnage: 1250 },
  { id: 2, name: 'Palmera del Pacífico S.A.', category: 'Aceites', tonnage: 890 },
  { id: 3, name: 'Conservas del Atlántico', category: 'Alimentos', tonnage: 650 },
  { id: 4, name: 'Distribuidora Nacional', category: 'Logística', tonnage: 2100 },
  { id: 5, name: 'Químicos Industriales Ltda', category: 'Químicos', tonnage: 430 },
  { id: 6, name: 'Textiles Caribeños', category: 'Textiles', tonnage: 520 },
]

export const mockInventoryItems = [
  {
    id: 'INV-001',
    client: 'Grupo Agroindustrial del Cauca',
    product: 'Maíz Blanco',
    presentation: 'Granel',
    quantity: 450,
    unit: 'Toneladas',
    location: 'A1-A12',
    lote: 'MAIZ-2026-001',
    status: 'Activo',
    receivedDate: '2026-05-28',
    expiryDate: '2027-05-28',
  },
  {
    id: 'INV-002',
    client: 'Palmera del Pacífico S.A.',
    product: 'Aceite de Palma',
    presentation: 'Big Bag',
    quantity: 320,
    unit: 'Toneladas',
    location: 'B2-B8',
    lote: 'ACEITE-2026-045',
    status: 'Activo',
    receivedDate: '2026-05-25',
    expiryDate: '2027-02-25',
  },
  {
    id: 'INV-003',
    client: 'Conservas del Atlántico',
    product: 'Tomate Procesado',
    presentation: 'Sacos',
    quantity: 150,
    unit: 'Toneladas',
    location: 'C3-C5',
    lote: 'TOMATE-2026-089',
    status: 'Activo',
    receivedDate: '2026-06-01',
    expiryDate: '2026-12-01',
  },
  {
    id: 'INV-004',
    client: 'Distribuidora Nacional',
    product: 'Harina de Maíz',
    presentation: 'Sacos',
    quantity: 280,
    unit: 'Toneladas',
    location: 'A5-A10',
    lote: 'HARINA-2026-012',
    status: 'Bajo Stock',
    receivedDate: '2026-05-10',
    expiryDate: '2026-11-10',
  },
  {
    id: 'INV-005',
    client: 'Químicos Industriales Ltda',
    product: 'Sulfato de Sodio',
    presentation: 'Big Bag',
    quantity: 95,
    unit: 'Toneladas',
    location: 'D1-D3',
    lote: 'SULFATO-2026-023',
    status: 'Crítico',
    receivedDate: '2026-04-15',
    expiryDate: '2026-10-15',
  },
  {
    id: 'INV-006',
    client: 'Textiles Caribeños',
    product: 'Tela Algodón',
    presentation: 'Rollos',
    quantity: 220,
    unit: 'Toneladas',
    location: 'E2-E6',
    lote: 'TELA-2026-156',
    status: 'Activo',
    receivedDate: '2026-05-20',
    expiryDate: '2027-05-20',
  },
]

export const mockOperations = [
  {
    id: 'OP-001',
    type: 'Recepción',
    client: 'Grupo Agroindustrial del Cauca',
    product: 'Maíz Blanco',
    quantity: 100,
    unit: 'Toneladas',
    status: 'Completado',
    assignedTo: 'Carlos Mendoza',
    startTime: '08:00',
    endTime: '10:30',
    date: '2026-06-04',
    resources: ['Montacargas-01', 'Balanza-A'],
  },
  {
    id: 'OP-002',
    type: 'Despacho',
    client: 'Palmera del Pacífico S.A.',
    product: 'Aceite de Palma',
    quantity: 80,
    unit: 'Toneladas',
    status: 'En Progreso',
    assignedTo: 'Juan Pérez',
    startTime: '11:00',
    endTime: 'Pendiente',
    date: '2026-06-05',
    resources: ['Montacargas-03', 'Balanza-B'],
  },
  {
    id: 'OP-003',
    type: 'Movimiento Interno',
    client: 'Conservas del Atlántico',
    product: 'Tomate Procesado',
    quantity: 50,
    unit: 'Toneladas',
    status: 'Pendiente Aprobación',
    assignedTo: 'María López',
    startTime: '09:00',
    endTime: 'Pendiente',
    date: '2026-06-05',
    resources: ['Montacargas-02'],
  },
  {
    id: 'OP-004',
    type: 'Recepción',
    client: 'Distribuidora Nacional',
    product: 'Harina de Maíz',
    quantity: 120,
    unit: 'Toneladas',
    status: 'Programada',
    assignedTo: 'Roberto Silva',
    startTime: '14:00',
    endTime: 'Pendiente',
    date: '2026-06-05',
    resources: ['Montacargas-04', 'Balanza-C'],
  },
]

export const mockAlerts = [
  {
    id: 'ALR-001',
    type: 'Crítico',
    title: 'Stock crítico: Sulfato de Sodio',
    description: 'Inventario de Químicos Industriales por debajo de 100 toneladas',
    timestamp: '2026-06-05 09:32',
    status: 'Activa',
  },
  {
    id: 'ALR-002',
    type: 'Advertencia',
    title: 'Vencimiento próximo: Tomate Procesado',
    description: 'Lote TOMATE-2026-089 vence en 180 días',
    timestamp: '2026-06-05 08:15',
    status: 'Activa',
  },
  {
    id: 'ALR-003',
    type: 'Información',
    title: 'Operación OP-003 pendiente de aprobación',
    description: 'Movimiento interno de Conservas del Atlántico requiere revisión',
    timestamp: '2026-06-05 07:45',
    status: 'Activa',
  },
  {
    id: 'ALR-004',
    type: 'Crítico',
    title: 'Montacargas-01 fuera de servicio',
    description: 'Reporte de falla detectado en sistema de mantenimiento',
    timestamp: '2026-06-04 16:20',
    status: 'Resuelta',
  },
]

export const mockKPIs = {
  receivedTonnage: 4520,
  dispatchedTonnage: 3890,
  totalInventory: 1595,
  slaCompliance: 96.5,
  operationalProductivity: 87.2,
  currentAlerts: 3,
  activeOperations: 7,
  availableResources: 8,
  warehouseCapacity: 65,
}

export const mockIncidents = [
  {
    id: 'INC-001',
    title: 'Daño en Big Bags de Aceite de Palma',
    description: 'Se detectó daño en 5 unidades durante el movimiento interno',
    severity: 'Alta',
    status: 'Abierto',
    assignedTo: 'Supervisor Turno A',
    createdDate: '2026-06-03',
    dueDate: '2026-06-06',
  },
  {
    id: 'INC-002',
    title: 'Discrepancia de inventario en ubicación C3',
    description: '20 toneladas no coinciden con registro',
    severity: 'Crítica',
    status: 'En Investigación',
    assignedTo: 'Analista Inventario',
    createdDate: '2026-06-02',
    dueDate: '2026-06-05',
  },
  {
    id: 'INC-003',
    title: 'Retraso en recepción de Maíz',
    description: 'Operación OP-001 se demoró 1 hora de lo programado',
    severity: 'Baja',
    status: 'Resuelto',
    assignedTo: 'Coordinador Operativo',
    createdDate: '2026-06-01',
    dueDate: '2026-06-03',
  },
]

export const mockTeam = [
  { id: 1, name: 'Carlos Mendoza', role: 'Operario', shift: 'Turno Mañana', status: 'Activo' },
  { id: 2, name: 'Juan Pérez', role: 'Operario', shift: 'Turno Tarde', status: 'Activo' },
  { id: 3, name: 'María López', role: 'Supervisora', shift: 'Turno Mañana', status: 'Activo' },
  { id: 4, name: 'Roberto Silva', role: 'Operario', shift: 'Turno Noche', status: 'Inactivo' },
  { id: 5, name: 'Ana García', role: 'Analista', shift: 'Turno Mañana', status: 'Activo' },
  { id: 6, name: 'Miguel Torres', role: 'Coordinador', shift: 'Turno Mañana', status: 'Activo' },
]

export const mockResources = [
  { id: 'MH-001', name: 'Montacargas-01', type: 'Montacargas', status: 'En Mantenimiento', capacity: 3 },
  { id: 'MH-002', name: 'Montacargas-02', type: 'Montacargas', status: 'Operativo', capacity: 3 },
  { id: 'MH-003', name: 'Montacargas-03', type: 'Montacargas', status: 'Operativo', capacity: 3 },
  { id: 'MH-004', name: 'Montacargas-04', type: 'Montacargas', status: 'Operativo', capacity: 2.5 },
  { id: 'BA-001', name: 'Balanza-A', type: 'Balanza', status: 'Operativa', capacity: 0 },
  { id: 'BA-002', name: 'Balanza-B', type: 'Balanza', status: 'Operativa', capacity: 0 },
  { id: 'BA-003', name: 'Balanza-C', type: 'Balanza', status: 'Operativa', capacity: 0 },
  { id: 'VH-001', name: 'Camión-01', type: 'Vehículo', status: 'Operativo', capacity: 25 },
]

export const mockShifts = [
  { id: 1, name: 'Turno Mañana', startTime: '06:00', endTime: '14:00', operatives: 6, supervisor: 'María López' },
  { id: 2, name: 'Turno Tarde', startTime: '14:00', endTime: '22:00', operatives: 5, supervisor: 'Juan Pérez' },
  { id: 3, name: 'Turno Noche', startTime: '22:00', endTime: '06:00', operatives: 4, supervisor: 'Roberto Silva' },
]

export const mockBranches = [
  { id: 1, name: 'Cartagena', location: 'Bolívar', employees: 18, capacity: 5000 },
  { id: 2, name: 'Valle del Cauca', location: 'Valle', employees: 15, capacity: 3500 },
]

export const mockDocuments = [
  {
    id: 'DOC-001',
    name: 'Formato Recepción de Mercancía',
    type: 'Formulario',
    category: 'Operativo',
    createdDate: '2026-05-01',
    version: 3,
  },
  {
    id: 'DOC-002',
    name: 'Acta de Despacho',
    type: 'Formulario',
    category: 'Operativo',
    createdDate: '2026-04-15',
    version: 2,
  },
  {
    id: 'DOC-003',
    name: 'Reporte de Incidente',
    type: 'Formulario',
    category: 'Incidentes',
    createdDate: '2026-03-20',
    version: 1,
  },
  {
    id: 'DOC-004',
    name: 'Manual de Operaciones',
    type: 'Documento',
    category: 'Referencia',
    createdDate: '2026-01-10',
    version: 5,
  },
]

export const mockChartData = [
  { hour: '06:00', received: 50, dispatched: 30 },
  { hour: '08:00', received: 120, dispatched: 80 },
  { hour: '10:00', received: 200, dispatched: 150 },
  { hour: '12:00', received: 180, dispatched: 190 },
  { hour: '14:00', received: 220, dispatched: 210 },
  { hour: '16:00', received: 150, dispatched: 180 },
  { hour: '18:00', received: 100, dispatched: 120 },
  { hour: '20:00', received: 50, dispatched: 60 },
]

export const mockProductivityData = [
  { shift: 'Turno Mañana', productivity: 92, target: 90 },
  { shift: 'Turno Tarde', productivity: 87, target: 90 },
  { shift: 'Turno Noche', productivity: 82, target: 90 },
]

export const mockSLAData = [
  { client: 'Agroindustrial', sla: 98 },
  { client: 'Palmera', sla: 96 },
  { client: 'Conservas', sla: 94 },
  { client: 'Distribuidora', sla: 97 },
  { client: 'Químicos', sla: 92 },
]

export const mockRules = [
  {
    id: 'RULE-001',
    name: 'FIFO Maíz Blanco',
    condition: 'Producto = Maíz Blanco',
    action: 'Despachar lote más antiguo primero',
    status: 'Activo',
  },
  {
    id: 'RULE-002',
    name: 'Alerta Stock Bajo',
    condition: 'Stock < 100 Toneladas',
    action: 'Enviar alerta a supervisor',
    status: 'Activo',
  },
  {
    id: 'RULE-003',
    name: 'Vencimiento Próximo',
    condition: 'Días para vencer < 30',
    action: 'Marcar como crítico y alertar',
    status: 'Activo',
  },
]
