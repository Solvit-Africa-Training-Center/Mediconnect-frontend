import React, { useState } from 'react'
import { Search, Calendar, Filter } from 'lucide-react'

const SearchFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [providerFilter, setProviderFilter] = useState('All Providers')

  const handleClearFilters = () => {
    setSearchTerm('')
    setDateFilter('')
    setProviderFilter('All Providers')
  }

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1 bg-blue-50 rounded">
          <Filter size={16} className="text-blue-600" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Search & Filter Records</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Patient/Reference
          </label>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Patient name, Reference ID..."
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dispensed Date
          </label>
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Insurance Provider
          </label>
          <select
            value={providerFilter}
            onChange={(e) => setProviderFilter(e.target.value)}
            className="input-field"
          >
            <option>All Providers</option>
            <option>RSSB</option>
            <option>MMI</option>
            <option>RADIANT</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleClearFilters}
            className="btn-secondary w-full"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
