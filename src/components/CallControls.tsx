import React from 'react';
import { Phone, PhoneOff, RefreshCw } from 'lucide-react';
import { CallRequest, CallResponse } from '../types/vapi';
import { useVapiCall } from '../hooks/useVapiCall';

interface CallControlsProps {
  request: CallRequest;
  onCallUpdate?: (call: CallResponse | null) => void;
}

export function CallControls({ request, onCallUpdate }: CallControlsProps) {
  const { call, error, isLoading, initiateCall, endCall } = useVapiCall(request);

  React.useEffect(() => {
    if (onCallUpdate) {
      onCallUpdate(call);
    }
  }, [call, onCallUpdate]);

  return (
    <div className="flex items-center gap-4">
      {!call && (
        <button
          onClick={initiateCall}
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Initiating...
            </>
          ) : (
            <>
              <Phone className="-ml-1 mr-2 h-4 w-4" />
              Start Call
            </>
          )}
        </button>
      )}

      {call && call.status !== 'completed' && call.status !== 'failed' && (
        <button
          onClick={endCall}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <PhoneOff className="-ml-1 mr-2 h-4 w-4" />
          End Call
        </button>
      )}

      {error && (
        <p className="text-sm text-red-600">
          Error: {error.message}
        </p>
      )}
    </div>
  );
}