'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinkClass =
    'text-gray-300 hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded';

  const buttonClass =
    'bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400';

  return (
    <header className="w-full bg-[#1e1e21]/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
          <Camera className="text-yellow-400" size={28} />
          <span className="text-2xl font-bold text-white">PhotoShare</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <Link href="/" className={navLinkClass}>Home</Link>
          <Link href="/explore" className={navLinkClass}>Explore</Link>

          {user ? (
            <>
              <Link href="/dashboard" className={navLinkClass}>Dashboard</Link>
              <Link href="/upload" className={navLinkClass}>Upload</Link>
              <Link href={`/profile/${user.id}`} className={buttonClass}>Profile</Link>
              <button onClick={logout} className={`${navLinkClass} text-red-400 hover:text-red-300`}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={navLinkClass}>Login</Link>
              <Link href="/register" className={buttonClass}>Register</Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1e1e21] px-6 py-4 border-t border-gray-700"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>Home</Link>
              <Link href="/explore" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>Explore</Link>

              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>Dashboard</Link>
                  <Link href="/upload" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>Upload</Link>
                  <Link href={`/profile/${user.id}`} onClick={() => setIsMenuOpen(false)} className={buttonClass}>Profile</Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className={`${navLinkClass} text-red-400 hover:text-red-300 text-left`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>Login</Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)} className={buttonClass}>Register</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
