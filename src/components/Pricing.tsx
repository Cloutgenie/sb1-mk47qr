import { Check } from 'lucide-react';
import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 150,
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 1,000 minutes/month',
      '$0.15/minute',
      'Basic appointment scheduling',
      'Business hours support',
      'Single language',
      'Basic analytics',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 499,
    description: 'Most popular for growing businesses.',
    features: [
      'Up to 10,000 minutes/month',
      '$0.13/minute (13% savings)',
      'Advanced scheduling system',
      'Priority support',
      'Multi-language support',
      'Advanced analytics & API access',
    ],
    highlight: true,
  },
  {
    name: 'Business',
    price: 999,
    description: 'For businesses with high call volumes.',
    features: [
      'Up to 25,000 minutes/month',
      '$0.12/minute (20% savings)',
      'Full calendar integration',
      '24/7 priority support',
      'Custom voice training',
      'Custom integrations',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Custom solutions for large organizations.',
    features: [
      'Unlimited minutes',
      'Volume-based pricing',
      'White-label solution',
      'Dedicated account manager',
      'Custom AI development',
      'SLA guarantees',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-lg shadow-xl divide-y divide-gray-200 ${
                tier.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 right-8 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  {tier.price === null ? (
                    <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                      <span className="text-base font-medium text-gray-500">/month</span>
                    </>
                  )}
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    tier.highlight
                      ? 'text-white bg-blue-600 hover:bg-blue-700'
                      : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                  }`}
                >
                  {tier.price === null ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}