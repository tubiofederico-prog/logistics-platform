import { ReactNode } from 'react'

interface Column<T> {
  header: string
  accessor: keyof T
  render?: (value: any, row: T) => ReactNode
  width?: string
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
  actions?: (row: T) => ReactNode
}

export function Table<T extends { id?: string | number }>({
  data,
  columns,
  onRowClick,
  actions,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-dark-border">
            {columns.map((column) => (
              <th
                key={String(column.accessor)}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-300 bg-dark-tertiary"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
            {actions && <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 bg-dark-tertiary">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id || idx}
              className="border-b border-dark-border hover:bg-dark-tertiary transition-colors cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => {
                const value = row[column.accessor]
                return (
                  <td key={String(column.accessor)} className="px-4 py-3 text-sm text-gray-200">
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                )
              })}
              {actions && <td className="px-4 py-3 text-sm">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
