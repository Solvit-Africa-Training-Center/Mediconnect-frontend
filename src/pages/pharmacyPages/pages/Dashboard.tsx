import React, { useEffect, useState } from 'react'
import { Scan, Clock, CheckCircle } from 'lucide-react'
import StatCard from '@/components/pharmacyComponent/components/StatCard'
import QuickActions from '@/components/pharmacyComponent/components/QuickActions'
import RecentActivity from '@/components/pharmacyComponent/components/RecentActivity'
import SystemAlerts from '@/components/pharmacyComponent/components/SystemAlerts'
import type { ActivityItem, SystemAlert, PrescriptionStat } from '../../../Types/index'
import { apiService } from '../../../Back-end/services/api'

const Dashboard: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [alerts, setAlerts] = useState<SystemAlert[]>([])
  const [stats, setStats] = useState<PrescriptionStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await apiService.checkHealth()

        const [statsData, activitiesData, alertsData] = await Promise.all([
          apiService.getPrescriptionStats(),
          apiService.getRecentActivity(),
          apiService.getSystemAlerts()
        ])

        setStats(statsData)
        setActivities(activitiesData)
        setAlerts(alertsData)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)

        // Fallback stats
        setStats([
          { title: 'Prescriptions Scanned Today', value: 47, subtitle: '15% more than yesterday', icon: 'scan', color: 'blue' },
          { title: 'Pending Prescriptions', value: 8, subtitle: '2 from yesterday', icon: 'clock', color: 'yellow' },
          { title: 'Dispensed Today', value: 156, subtitle: '12% more today', icon: 'check', color: 'green' }
        ])

        // Fallback alert
        setAlerts([
          { id: 'connection-error', type: 'warning', title: 'API Connection', message: 'Unable to connect to MedConnect API - using offline mode', timestamp: '1 minute ago' }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'scan': return Scan
      case 'clock': return Clock
      case 'check': return CheckCircle
      default: return Scan
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-3">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-primary-600"></div>
        <span className="text-gray-600 text-lg font-medium">Connecting to MedConnect API...</span>
      </div>
    )
  }

  return (
<div className="p-6 space-y-6 bg-gray-50 min-h-screen">

  {/* Stats Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {stats.map((stat, index) => (
      <div key={index} className="bg-white rounded-lg shadow p-5 relative">
        {/* Icon */}
        <div className={`absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>
          <stat.icon />
        </div>
        {/* Text */}
        <p className="text-gray-500 font-medium">{stat.title}</p>
        <p className="text-2xl font-bold mt-2">{stat.value}</p>
        <p className="text-gray-400 text-sm mt-1">{stat.subtitle}</p>
      </div>
    ))}
  </div>

  {/* Quick Actions */}
  <div className="bg-white rounded-lg shadow p-5 flex space-x-4">
    <button className="flex-1 bg-blue-600 text-white rounded-md px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition">
      <Scan size={20} />
      Scan New Prescription
    </button>
    <button className="flex-1 bg-gray-100 text-gray-700 rounded-md px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-200 transition">
      <CheckCircle size={20} />
      Dispensed Records
    </button>
  </div>

  {/* Recent Activity & System Alerts */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Recent Activity */}
    <div className="bg-white rounded-lg shadow p-5">
      
      <RecentActivity activities={activities} />
    </div>

    {/* System Alerts */}
    <div className="bg-white rounded-lg shadow p-5">
      
      <SystemAlerts alerts={alerts} />
    </div>
  </div>

</div>)
}
export default Dashboard
