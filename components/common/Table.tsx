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
    <div className="overflow-x-auto rounded-lg border border-[#2d435e]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#2d435e] bg-[#243447]">
            {columns.map((column) => (
              <th
                key={String(column.accessor)}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-300"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
            {actions && <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id || idx}
              className="border-b border-[#2d435e] hover:bg-[#243447] transition-colors cursor-pointer last:border-b-0"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => {
                const value = row[column.accessor]
                return (
                  <td key={String(column.accessor)} className="px-6 py-4 text-sm text-gray-200">
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                )
              })}
              {actions && <td className="px-6 py-4 text-sm">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
