'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

// 1. Define types for clarity
interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// 2. Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. AuthProvider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Load user from localStorage (CSR persistence)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Invalid user data in storage:', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Simulated login
  const login = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    console.log('Logged in:', userData);
  };

  // Logout and redirect to home
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('Logged out');
    router.push('/');
  };

  const value: AuthContextType = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 4. Hook for components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
