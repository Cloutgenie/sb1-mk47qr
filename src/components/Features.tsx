import { Bot, Calendar, DollarSign, HeadphonesIcon, MessageSquare, Shield } from 'lucide-react';
import React from 'react';

const features = [
  {
    name: 'Smart Appointment Scheduling',
    description: 'Intelligent scheduling that manages your calendar, handles conflicts, and sends reminders automatically.',
    icon: Calendar,
  },
  {
    name: 'Collections Management',
    description: 'Tactful, automated collection calls that maintain professionalism while improving recovery rates.',
    icon: DollarSign,
  },
  {
    name: '24/7 Customer Service',
    description: 'Round-the-clock availability for inquiries, support, and information - never miss a call.',
    icon: HeadphonesIcon,
  },
  {
    name: 'Natural Conversations',
    description: 'Advanced AI that understands context, handles complex dialogues, and responds naturally.',
    icon: MessageSquare,
  },
  {
    name: 'Compliance & Security',
    description: 'Built-in compliance checks and secure handling of sensitive information.',
    icon: Shield,
  },
  {
    name: 'Multi-Language Support',
    description: 'Communicate with customers in their preferred language for better engagement.',
    icon: Bot,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Virtual Reception Desk
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Handle calls, appointments, and customer service with intelligent automation that feels personal.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}