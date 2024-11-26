import { CallRequest, CallResponse, VoiceProfile } from '../types/vapi';

export class VapiClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl = 'https://api.vapi.ai/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async createVoiceProfile(profile: Omit<VoiceProfile, 'id'>): Promise<VoiceProfile> {
    return this.request<VoiceProfile>('/profiles', {
      method: 'POST',
      body: JSON.stringify(profile),
    });
  }

  async getVoiceProfile(profileId: string): Promise<VoiceProfile> {
    return this.request<VoiceProfile>(`/profiles/${profileId}`);
  }

  async initiateCall(request: CallRequest): Promise<CallResponse> {
    return this.request<CallResponse>('/calls', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async getCallStatus(callId: string): Promise<CallResponse> {
    return this.request<CallResponse>(`/calls/${callId}`);
  }

  async updateCallScript(callId: string, script: string): Promise<CallResponse> {
    return this.request<CallResponse>(`/calls/${callId}/script`, {
      method: 'PATCH',
      body: JSON.stringify({ script }),
    });
  }

  async endCall(callId: string): Promise<CallResponse> {
    return this.request<CallResponse>(`/calls/${callId}`, {
      method: 'DELETE',
    });
  }
}