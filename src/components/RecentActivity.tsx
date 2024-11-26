import { Clock } from 'lucide-react';
import React from 'react';

const activities = [
  {
    id: 1,
    type: 'payment',
    description: 'Payment processed for $750.50',
    account: 'ACC-8765-4321',
    time: '5m ago',
  },
  {
    id: 2,
    type: 'call',
    description: 'Call completed with Sarah Johnson',
    account: 'ACC-1234-5678',
    time: '10m ago',
  },
  {
    id: 3,
    type: 'schedule',
    description: 'Payment scheduled for March 15',
    account: 'ACC-9876-5432',
    time: '15m ago',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.account}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}