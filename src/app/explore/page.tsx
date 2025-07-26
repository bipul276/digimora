// src/app/explore/page.tsx
'use client'; // This page has interactive elements (filters), so it's a client component.

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { TopUpload, RecentComment } from '@/types';
import TopUploadCard from '@/components/photo/TopUploadCard';
import RecentCommentCard from '@/components/photo/RecentCommentCard';

// MOCK DATA
const mockTopUploads: TopUpload[] = [
    { id: 'tu1', title: 'Photo of the Day', imageUrl: '/images/agile.png', author: { name: 'Jane Doe', avatarUrl: '/images/avatar-1.png' }, rating: 4.8, likes: 2500, tags: ['Nature', 'Travel'] },
    { id: 'tu2', title: 'Cityscapes', imageUrl: '/images/companies.png', author: { name: 'John Smith', avatarUrl: '/images/avatar-2.png' }, rating: 4.5, likes: 3200, tags: ['Urban', 'Architecture', 'Night Life'] },
    { id: 'tu3', title: 'Adventure Awaits', imageUrl: '/images/dsa.png', author: { name: 'Emily White', avatarUrl: '/images/avatar-3.png' }, rating: 4.7, likes: 1800, tags: ['Adventure'] },
    { id: 'tu4', title: 'Top Photo', imageUrl: '/images/harrypotter.png', author: { name: 'Chris Green', avatarUrl: '/images/avatar-4.png' }, rating: 5.0, likes: 1234, tags: ['Photography', 'Photo Sharing'], isPro: true },
];

const mockRecentComments: RecentComment[] = [
    { id: 'rc1', author: { name: 'Alex', avatarUrl: '/images/immune.png' }, comment: 'Breathtaking view, absolutely stunning shot!', onPhoto: 'Beach Sunset', rating: 5 },
    { id: 'rc2', author: { name: 'Jordan', avatarUrl: '/images/mern.png' }, comment: 'I love the colors! So vibrant and perfect for the subject.', onPhoto: 'City Lights', rating: 4 },
    { id: 'rc3', author: { name: 'Taylor', avatarUrl: '/images/slaughterhouse.png' }, comment: 'This is amazing, how did you capture this moment so perfectly?', onPhoto: 'Mountain Hike', rating: 5 },
    { id: 'rc4', author: { name: 'Morgan', avatarUrl: '/images/slendidsons.png' }, comment: 'The colors are stunning! Perfect capture!', onPhoto: 'Autumn Leaves', rating: 5 },
];

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="font-semibold text-white mb-3">{title}</h3>
        {children}
    </div>
);

export default function ExplorePage() {
  const [popularity, setPopularity] = useState('day');

  return (
    <div className="bg-[#161618] min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white">Explore Your Photos</h1>
        <p className="text-gray-400 mt-2">Check out trending images from users</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 bg-[#1e1e21] p-6 rounded-lg self-start">
            <FilterSection title="Popularity">
              <div className="flex bg-[#2a2a2e] rounded-md p-1">
                <button onClick={() => setPopularity('day')} className={`flex-1 text-sm py-1 rounded ${popularity === 'day' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Day</button>
                <button onClick={() => setPopularity('week')} className={`flex-1 text-sm py-1 rounded ${popularity === 'week' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Week</button>
                <button onClick={() => setPopularity('month')} className={`flex-1 text-sm py-1 rounded ${popularity === 'month' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Month</button>
              </div>
            </FilterSection>

            <FilterSection title="Location">
              <div className="relative">
                <input type="text" placeholder="Search by tag or location" className="w-full bg-[#2a2a2e] border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </FilterSection>

            <FilterSection title="Photo Status">
                <div className="space-y-2 text-gray-300">
                    <label className="flex items-center"><input type="radio" name="status" className="form-radio bg-gray-700 border-gray-600 text-yellow-500 mr-2" defaultChecked /> All</label>
                    <label className="flex items-center"><input type="radio" name="status" className="form-radio bg-gray-700 border-gray-600 text-yellow-500 mr-2" /> Premium</label>
                    <label className="flex items-center"><input type="radio" name="status" className="form-radio bg-gray-700 border-gray-600 text-yellow-500 mr-2" /> Free</label>
                </div>
            </FilterSection>

            <FilterSection title="Categories">
                <div className="relative">
                    <select className="w-full appearance-none bg-[#2a2a2e] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option>Select Category</option>
                        <option>Nature</option>
                        <option>Urban</option>
                        <option>Travel</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </FilterSection>
            
            <button className="w-full bg-yellow-500 text-black font-bold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors">
              Search
            </button>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Top Photo Uploads</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Sort by:</span>
                    <select className="bg-[#2a2a2e] border border-gray-700 rounded-md px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option>Newest</option>
                        <option>Popular</option>
                    </select>
                </div>
            </div>
            <div className="space-y-4">
                {mockTopUploads.map(upload => <TopUploadCard key={upload.id} upload={upload} />)}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Recent Comments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockRecentComments.map(comment => <RecentCommentCard key={comment.id} comment={comment} />)}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
