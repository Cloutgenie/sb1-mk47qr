export interface Call {
  id: string;
  customerName: string;
  accountNumber: string;
  amount: number;
  status: 'in-progress' | 'completed' | 'scheduled' | 'failed';
  timestamp: string;
  duration?: number;
  outcome?: string;
}

export interface Stats {
  totalCalls: number;
  successRate: number;
  averageDuration: number;
  totalCollected: number;
}

export interface Agent {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  callsHandled: number;
  successRate: number;
}