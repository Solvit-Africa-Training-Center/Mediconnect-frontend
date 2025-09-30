import React from 'react';
import { Scan, Clock, CheckCircle } from 'lucide-react';
import StatCard from '@/components/pharmacy/StatsCard';
import QuickActions from '@/components/pharmacy/QuickActions';
import RecentActivity from '@/components/pharmacy/RecentActivity';
import SystemAlerts from '@/components/pharmacy/SystemAlerts';
import type{ PrescriptionStat, SystemAlert } from '../../Types/pharmacist/pharmacyTypes';
import type { ActivityItem } from '../../Types/pharmacist/pharmacyTypes';

const PharmacyDashboard: React.FC = () => {
  // Static example data
  const stats: PrescriptionStat[] = [
    {
      title: 'Prescriptions Scanned Today',
      value: 47,
      subtitle: '15% more than yesterday',
      icon: 'scan',
      color: 'blue',
    },
    {
      title: 'Pending Prescriptions',
      value: 8,
      subtitle: '2 from yesterday',
      icon: 'clock',
      color: 'yellow',
    },
    {
      title: 'Dispensed Today',
      value: 156,
      subtitle: '12% more today',
      icon: 'check',
      color: 'green',
    },
  ];

  const activities: ActivityItem[] = [
    { id: '1', description: 'Patient John Doe scanned a prescription', timestamp: '5 min ago' },
    { id: '2', description: 'Prescription #234 approved', timestamp: '10 min ago' },
  ];

  const alerts: SystemAlert[] = [
    { id: '1', type: 'info', title: 'System Update', message: 'New version available', timestamp: '30 min ago' },
    { id: '2', type: 'warning', title: 'Connection Issue', message: 'API not responding', timestamp: '1 hr ago' },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'scan': return Scan;
      case 'clock': return Clock;
      case 'check': return CheckCircle;
      default: return Scan;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={getIconComponent(stat.icon)}
            color={stat.color}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity and System Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={activities} />
        <SystemAlerts alerts={alerts} />
      </div>
    </div>
  );
};

export default PharmacyDashboard;
