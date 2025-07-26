// src/components/auth/RegisterForm.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Crown } from 'lucide-react';
import Input from '@/components/ui/Input';

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register form submitted');
  };

  return (
    <div className="w-full max-w-md bg-black/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/50 overflow-hidden">
        {/* Decorative Glowing Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="p-8">
            <div className="text-center mb-8">
                <Crown className="mx-auto text-yellow-400 mb-4" size={40} />
                <h1 className="text-4xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}>
                    Join the Kingdom
                </h1>
                <p className="text-purple-300/80 mt-2">Create your royal credentials</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    type="text"
                    placeholder="Your Royal Name"
                    icon={<User size={18} />}
                    required
                />
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
                
                {/* Custom Styled Button */}
                <button type="submit" className="w-full font-bold text-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-3 rounded-lg shadow-lg shadow-yellow-500/20 hover:scale-105 transform transition-all duration-300">
                    Request Entry
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-400">
                Already have credentials?{' '}
                <Link href="/login" legacyBehavior>
                    <a className="font-semibold text-yellow-400 hover:underline">Authenticate</a>
                </Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default RegisterForm;
