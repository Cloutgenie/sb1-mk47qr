import { Activity, DollarSign, Phone, Users } from 'lucide-react';
import React from 'react';
import { Stats } from '../types';
import { LiveCalls } from './LiveCalls';
import { RecentActivity } from './RecentActivity';
import { StatsCard } from './StatsCard';

const mockStats: Stats = {
  totalCalls: 1247,
  successRate: 78.5,
  averageDuration: 3.2,
  totalCollected: 284750,
};

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Calls"
          value={mockStats.totalCalls.toLocaleString()}
          icon={Phone}
          trend={+12}
        />
        <StatsCard
          title="Success Rate"
          value={`${mockStats.successRate}%`}
          icon={Activity}
          trend={+2.5}
        />
        <StatsCard
          title="Avg Duration"
          value={`${mockStats.averageDuration}m`}
          icon={Users}
          trend={-0.8}
        />
        <StatsCard
          title="Total Collected"
          value={`$${mockStats.totalCollected.toLocaleString()}`}
          icon={DollarSign}
          trend={+15.2}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LiveCalls />
        <RecentActivity />
      </div>
    </div>
  );
}