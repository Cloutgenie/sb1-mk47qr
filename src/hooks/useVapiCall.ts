import { useCallback, useEffect, useState } from 'react';
import { CallRequest, CallResponse } from '../types/vapi';
import { VapiClient } from '../api/vapi';

const vapiClient = new VapiClient(import.meta.env.VITE_VAPI_API_KEY || '');

export function useVapiCall(request: CallRequest) {
  const [call, setCall] = useState<CallResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const initiateCall = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await vapiClient.initiateCall(request);
      setCall(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to initiate call'));
    } finally {
      setIsLoading(false);
    }
  }, [request]);

  const updateScript = useCallback(async (script: string) => {
    if (!call?.callId) return;
    try {
      const response = await vapiClient.updateCallScript(call.callId, script);
      setCall(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update script'));
    }
  }, [call?.callId]);

  const endCall = useCallback(async () => {
    if (!call?.callId) return;
    try {
      await vapiClient.endCall(call.callId);
      setCall(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to end call'));
    }
  }, [call?.callId]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (call?.callId && call.status !== 'completed' && call.status !== 'failed') {
      intervalId = setInterval(async () => {
        try {
          const response = await vapiClient.getCallStatus(call.callId);
          setCall(response);
          
          if (response.status === 'completed' || response.status === 'failed') {
            clearInterval(intervalId);
          }
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to get call status'));
          clearInterval(intervalId);
        }
      }, 2000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [call?.callId, call?.status]);

  return {
    call,
    error,
    isLoading,
    initiateCall,
    updateScript,
    endCall,
  };
}