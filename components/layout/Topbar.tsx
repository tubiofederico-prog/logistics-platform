'use client'

import { Search, Bell, User, MapPin } from 'lucide-react'

export function Topbar() {
  return (
    <header className="h-16 bg-[#1a2332] border-b border-[#2d435e] fixed top-0 right-0 left-64 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative hidden md:block w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Buscar inventario, operaciones, clientes..."
              className="w-full bg-[#243447] border border-[#2d435e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#243447] rounded-lg border border-[#2d435e]">
            <MapPin size={16} className="text-[#00d9ff]" />
            <select className="bg-transparent text-sm text-gray-300 focus:outline-none cursor-pointer">
              <option>Cartagena</option>
              <option>Valle del Cauca</option>
            </select>
          </div>

          <button className="relative p-2 hover:bg-[#243447] rounded-lg transition-colors">
            <Bell size={20} className="text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 px-3 py-2 bg-[#243447] rounded-lg border border-[#2d435e]">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00d9ff] to-[#0ea5e9] rounded-full flex items-center justify-center">
              <User size={16} className="text-[#0f1419]" />
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
