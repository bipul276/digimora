// src/app/page.tsx
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

// Mock data for categories and trending photos
const trendingPhotos = [
  { title: "Beautiful Landscapes", description: "Nature's finest scenes", imageUrl: "/images/agile.png" },
  { title: "Moments with Friends", description: "Sharing joy and laughter", imageUrl: "/images/companies.png" },
  { title: "Artistic Expressions", description: "Creativity in focus", imageUrl: "/images/dsa.png" },
  { title: "Everyday Life", description: "The beauty of the mundane", imageUrl: "/images/harrypotter.png" },
  { title: "Capture the Moment", description: "Unforgettable memories", imageUrl: "/images/immune.png" },
];

const photoCategories = ["Fashion", "Travel", "Events", "Nature", "Art", "Food", "Sports", "Animals", "Technology", "Urban", "Music", "Abstract", "Health", "Family", "Holiday"];

export default function LandingPage() {
  return (
    <div className="bg-[#161618]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Share your moments and discover photos from around the world!
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Join our vibrant community.
          </p>
          <button className="mt-8 bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-transform hover:scale-105">
            Start Sharing
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <Image src="/images/agile.png" alt="Photo collage" width={500} height={500} className="rounded-lg shadow-2xl" />
        </div>
      </section>

      {/* Discover Trending Photos Section */}
      <section className="py-20 bg-[#1e1e21]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Discover Trending Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {trendingPhotos.map((photo, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden">
                <Image src={photo.imageUrl} alt={photo.title} width={400} height={500} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-white text-lg">{photo.title}</h3>
                  <p className="text-gray-300 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Photo Categories</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {photoCategories.map(category => (
                <button key={category} className="bg-[#2a2a2e] text-gray-300 px-5 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
                  {category}
                </button>
              ))}
            </div>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section className="py-20 bg-[#1e1e21]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Choose Your Plan</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#2a2a2e] p-8 rounded-lg border border-gray-700 md:w-1/2 flex flex-col">
              <h3 className="text-3xl font-bold text-white">Basic</h3>
              <p className="text-5xl font-extrabold text-white mt-4">FREE</p>
              <ul className="text-left space-y-3 mt-8 text-gray-300 flex-grow">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Upload 1 photo</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> All community features</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> 7-days trial</li>
              </ul>
              <button className="w-full mt-8 bg-gray-600 text-white font-bold py-3 rounded-lg hover:bg-gray-500 transition-colors">
                Start with free
              </button>
            </div>
            {/* Pro Plan */}
            <div className="bg-[#2a2a2e] p-8 rounded-lg border-2 border-yellow-500 md:w-1/2 relative flex flex-col">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full">UPGRADE PLAN</div>
               <h3 className="text-3xl font-bold text-yellow-400">Pro</h3>
               <p className="text-5xl font-extrabold text-white mt-4">$30<span className="text-lg font-medium text-gray-400">/month</span></p>
               <ul className="text-left space-y-3 mt-8 text-gray-300 flex-grow">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Unlimited uploads</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Advanced options</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Premium features</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> 7-days trial</li>
              </ul>
              <button className="w-full mt-8 bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Start with Pro
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
