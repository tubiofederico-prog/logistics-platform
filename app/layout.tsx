import type { Metadata } from 'next'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'LogistiX - Torre de Control Logística',
  description: 'Plataforma B2B ultra premium de gestión logística, WMS y automatización empresarial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-navy-900 text-gray-100">
        <Sidebar />
        <Topbar />
        <main className="ml-64 mt-16 p-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
