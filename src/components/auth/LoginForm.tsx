// src/components/auth/LoginForm.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Lock, Crown } from 'lucide-react';
import Input from '@/components/ui/Input';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div className="w-full max-w-md bg-black/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/50 overflow-hidden">
        {/* Decorative Glowing Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="p-8">
            <div className="text-center mb-8">
                <Crown className="mx-auto text-yellow-400 mb-4" size={40} />
                <h1 className="text-4xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}>
                    Royal Access
                </h1>
                <p className="text-purple-300/80 mt-2">Enter the digital kingdom</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    type="email"
                    placeholder="Digital Identifier (Email)"
                    icon={<Mail size={18} />}
                    required
                />
                <Input
                    type="password"
                    placeholder="Secret Key (Password)"
                    icon={<Lock size={18} />}
                    required
                />
                <div className="text-right">
                    <Link href="/forgot-password" legacyBehavior>
                        <a className="text-sm text-purple-400 hover:text-yellow-400 hover:underline transition-colors">Forgot Key?</a>
                    </Link>
                </div>
                
                {/* Custom Styled Button */}
                <button type="submit" className="w-full font-bold text-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-3 rounded-lg shadow-lg shadow-yellow-500/20 hover:scale-105 transform transition-all duration-300">
                    Authenticate
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-400">
                No credentials?{' '}
                <Link href="/register" legacyBehavior>
                    <a className="font-semibold text-yellow-400 hover:underline">Request Entry</a>
                </Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;
