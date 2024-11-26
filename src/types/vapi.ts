export interface VoiceProfile {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'neutral';
  language: string;
  emotionalRange: {
    empathy: number;
    authority: number;
    friendliness: number;
  };
  speechPatterns: {
    pace: number;
    pitch: number;
    variation: number;
    pauseFrequency: number;
  };
}

export interface CallRequest {
  profileId: string;
  script: string;
  context?: {
    customerName: string;
    accountNumber: string;
    amount: number;
    dueDate?: string;
  };
  compliance: {
    requiredDisclosures: string[];
    jurisdiction: string;
    timeZone: string;
  };
}

export interface CallResponse {
  callId: string;
  status: 'initiated' | 'in-progress' | 'completed' | 'failed';
  transcript?: string;
  outcome?: {
    success: boolean;
    paymentPromised?: {
      amount: number;
      date: string;
    };
    nextAction?: string;
  };
  analytics?: {
    duration: number;
    customerSentiment: number;
    complianceScore: number;
  };
}