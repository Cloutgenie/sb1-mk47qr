import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-500 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-base text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="text-base text-gray-500 hover:text-gray-900">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-500 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-base text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#help" className="text-base text-gray-500 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="text-base text-gray-500 hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#compliance" className="text-base text-gray-500 hover:text-gray-900">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} VoiceFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}