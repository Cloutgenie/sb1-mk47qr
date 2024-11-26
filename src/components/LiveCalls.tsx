import { Phone } from 'lucide-react';
import React from 'react';
import { Call } from '../types/index';
import { CallControls } from './CallControls';

const mockCalls: Call[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    accountNumber: '1234-5678',
    amount: 1250.00,
    status: 'in-progress',
    timestamp: '2024-03-10T14:30:00Z',
    duration: 2.5,
  },
  {
    id: '2',
    customerName: 'Michael Chen',
    accountNumber: '8765-4321',
    amount: 750.50,
    status: 'completed',
    timestamp: '2024-03-10T14:25:00Z',
    duration: 4.2,
    outcome: 'Payment Scheduled',
  },
];

const defaultCallRequest = {
  profileId: 'default-profile',
  script: 'Hello, this is CollectFlow AI calling regarding your account...',
  compliance: {
    requiredDisclosures: [
      'This call may be recorded for quality assurance',
      'This is an attempt to collect a debt',
    ],
    jurisdiction: 'US',
    timeZone: 'America/New_York',
  },
};

export function LiveCalls() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Live Calls</h2>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              2 Active
            </span>
            <CallControls 
              request={defaultCallRequest}
              onCallUpdate={(call) => {
                console.log('Call updated:', call);
              }}
            />
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {mockCalls.map((call) => (
          <div key={call.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{call.customerName}</p>
                  <p className="text-sm text-gray-500">Account: {call.accountNumber}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">${call.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{call.duration}m</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  call.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
              </span>
              {call.outcome && (
                <span className="text-sm text-gray-500">{call.outcome}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}