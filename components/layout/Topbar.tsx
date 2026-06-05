'use client'

import { Search, Bell, User, MapPin } from 'lucide-react'

export function Topbar() {
  return (
    <header className="h-16 bg-navy-800 border-b border-navy-600 fixed top-0 right-0 left-64 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative hidden md:block w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Buscar inventario, operaciones, clientes..."
              className="w-full bg-navy-700 border border-navy-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-navy-700 rounded-lg border border-navy-600">
            <MapPin size={16} className="text-cyan-400" />
            <select className="bg-transparent text-sm text-gray-300 focus:outline-none cursor-pointer">
              <option>Cartagena</option>
              <option>Valle del Cauca</option>
            </select>
          </div>

          <button className="relative p-2 hover:bg-navy-700 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 px-3 py-2 bg-navy-700 rounded-lg border border-navy-600">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-electric-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-navy-900" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-500">Supervisor</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
