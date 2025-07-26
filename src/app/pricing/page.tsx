// src/app/pricing/page.tsx
'use client';

import React from 'react';
import { CheckCircle, CreditCard, Calendar, Lock, User } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function PricingPage() {
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment provider like Stripe.
    // For now, we'll just log to the console.
    console.log('Processing payment...');
    alert('Thank you for your purchase! (This is a simulation)');
  };

  return (
    <div className="bg-[#161618] min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white">Upgrade to Pro</h1>
            <p className="text-lg text-gray-400 mt-2">Unlock unlimited access and premium features.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left Column: Order Summary */}
          <div className="lg:col-span-2 bg-[#1e1e21] p-8 rounded-xl h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            <div className="bg-[#2a2a2e] p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-semibold text-yellow-400">Pro Plan</h3>
                <p className="text-4xl font-bold text-white mt-2">$30.00 <span className="text-lg font-medium text-gray-400">/ month</span></p>
                <ul className="space-y-3 mt-6 text-gray-300 border-t border-gray-700 pt-6">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Unlimited uploads</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Advanced editing options</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Premium support</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Access to exclusive content</li>
                </ul>
            </div>
            <div className="mt-6 text-xs text-gray-500 text-center">
                <p>You will be billed monthly. You can cancel anytime.</p>
            </div>
          </div>

          {/* Right Column: Payment Details Form */}
          <div className="lg:col-span-3 bg-[#1e1e21] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-300 mb-2">Name on Card</label>
                    <Input id="card-name" name="card-name" type="text" placeholder="John Doe" icon={<User size={18} />} required />
                </div>
                
                <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                    <Input id="card-number" name="card-number" type="text" placeholder="0000 0000 0000 0000" icon={<CreditCard size={18} />} required />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                        <Input id="expiry" name="expiry" type="text" placeholder="MM / YY" icon={<Calendar size={18} />} required />
                    </div>
                    <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-300 mb-2">CVC / CVV</label>
                        <Input id="cvc" name="cvc" type="text" placeholder="123" icon={<Lock size={18} />} required />
                    </div>
                </div>

                <div className="pt-6">
                    <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                        Pay $30.00
                    </Button>
                </div>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center">
                    <Lock size={12} className="mr-2" /> Secure payment powered by Stripe.
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
