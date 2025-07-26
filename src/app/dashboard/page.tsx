// src/app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import PhotoGrid from '@/components/photo/PhotoGrid';
import { Photo } from '@/components/photo/PhotoCard'; // Re-using the Photo type from our component
import { Sparkles } from 'lucide-react';

// MOCK DATA: Represents photos uploaded by the logged-in user.
const userPhotos: Photo[] = [
  { id: '1', imageUrl: '/images/agile.png', title: 'Sunset Over Mountains', description: 'Captured during my last trek.', likes: 28, comments: 5 },
  { id: '2', imageUrl: '/images/companies.png', title: 'City Skyline at Night', description: 'The view from my apartment.', likes: 12, comments: 2 },
  { id: '3', imageUrl: '/images/dsa.png', title: 'Beach Day Fun', description: 'Perfect weather for a beach outing.', likes: 45, comments: 8 },
  { id: '4', imageUrl: '/images/harrypotter.png', title: 'Family Gathering', description: 'Cherished moments with loved ones.', likes: 13, comments: 1 },
  { id: '5', imageUrl: '/images/immune.png', title: 'Nature Walks', description: 'Beautiful trails in the local park.', likes: 33, comments: 6 },
  { id: '6', imageUrl: '/images/mern.png', title: 'Pet Adventures', description: 'Exploring the park with my dog.', likes: 21, comments: 4 },
  { id: '7', imageUrl: '/images/slaughterhouse.png', title: 'Food Photography', description: 'Delicious meals from my kitchen.', likes: 24, comments: 9, isPro: true },
  { id: '8', imageUrl: '/images/splendidsons.png', title: 'Travel Memories', description: 'Snapshots from my latest trip.', likes: 17, comments: 3 },
];

const filterCategories = ['All', 'Uploaded', 'Favorites', 'Recent', 'Popular', 'Activity Log'];

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="bg-[#161618] min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Stunning Photos</h1>
        
        {/* Filter Buttons */}
        <div className="flex items-center space-x-2 md:space-x-3 mb-8 overflow-x-auto pb-2">
          {filterCategories.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors flex-shrink-0 ${activeFilter === filter ? 'bg-gray-700 text-white' : 'bg-[#2a2a2e] text-gray-400 hover:bg-gray-700'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Photo Grid */}
        <div className="mb-12">
            <PhotoGrid photos={userPhotos} />
        </div>

        {/* "Use Autodesigner" Bar */}
        <div className="bg-black/50 backdrop-blur-md border border-gray-700 p-4 rounded-lg flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Use Autodesigner 2.0</h3>
            <button className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors">
                <Sparkles className="text-black" />
            </button>
        </div>
      </div>
    </div>
  );
}
