// src/app/profile/[userId]/page.tsx
import Image from 'next/image';
import { UserProfile } from '@/types';
import { MapPin, Award, Heart, Users, UserPlus } from 'lucide-react';
import Button from '@/components/ui/Button';
import ReviewCard from '@/components/photo/ReviewCard';

// MOCK DATA: In a real app, you would fetch this from your database
// based on the `params.userId`.
const mockUser: UserProfile = {
  id: '1',
  name: 'Alex Johnson',
  avatarUrl: '/images/dsa.png',
  coverImageUrl: '/images/immune.png',
  joinDate: 'Joined in 2023',
  location: 'San Francisco, CA',
  achievements: [
    { icon: 'PhotoExpert', title: 'Photo Expert', description: 'Uploaded 50+ stunning photos' },
    { icon: 'Explorer', title: 'Explorer', description: 'Shared photos from 10+ locations' },
    { icon: 'Adventurer', title: 'Adventurer', description: 'Rated 20+ photos from other users' },
  ],
  engagement: {
    likes: 1200,
    followers: 450,
    following: 180,
  },
  reviews: [
    { id: 'r1', title: 'Beach Sunset', rating: 5, comment: 'This sunset was magical, a perfect end to the day.', upvotes: 30, downvotes: 2, author: { name: 'Alex Johnson', avatarUrl: '/images/profile-avatar.png' }, images: [{id: 'i1', url: '/images/agile.png'}, {id: 'i2', url: '/images/companies.png'}] },
    { id: 'r2', title: 'Photo Uploads', rating: 4, comment: 'Stunning scenery, poor lighting. I feel this photo captures the sunset perfectly, but the lighting could improve.', upvotes: 45, downvotes: 5, author: { name: 'Alex Johnson', avatarUrl: '/images/dsa.png' }, images: [] },
    { id: 'r3', title: 'Birthday Cake', rating: 5, comment: 'Delicious chocolate cake. This cake was a showstopper at the party! Rich chocolate flavor and beautifully decorated.', upvotes: 120, downvotes: 10, author: { name: 'Alex Johnson', avatarUrl: '/images/immune.png' }, images: [{id: 'i3', url: '/images/mern.png'}, {id: 'i4', url: '/images/splendidsons.png'}] },
  ],
};

// A helper to get the right icon component
const AchievementIcon = ({ iconName }: { iconName: string }) => {
    if (iconName === 'PhotoExpert') return <Award className="text-yellow-400" />;
    if (iconName === 'Explorer') return <MapPin className="text-blue-400" />;
    if (iconName === 'Adventurer') return <Heart className="text-red-400" />;
    return null;
}

export default function ProfilePage({ params }: { params: { userId: string } }) {
  // In a real app: const user = await fetchUser(params.userId);
  const user = mockUser;

  return (
    <div className="bg-[#161618] min-h-screen">
      {/* Cover Image and Header */}
      <div className="relative h-60 md:h-80 w-full">
        <Image src={user.coverImageUrl} alt="Cover image" layout="fill" objectFit="cover" className="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161618] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 py-4">
            <div className="flex items-end space-x-5">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-700 -mb-10">
                    <Image src={user.avatarUrl} alt={user.name} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{user.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-400 mt-1">
                        <span>{user.joinDate}</span>
                        <span className="flex items-center"><MapPin size={14} className="mr-1" /> {user.location}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#1e1e21] p-4 rounded-lg space-y-3">
              <Button variant="primary">Add Friend</Button>
              <Button variant="secondary">Send Message</Button>
              <Button variant="ghost">Report</Button>
              <Button variant="ghost">Recommend</Button>
            </div>
            
            <div className="bg-[#1e1e21] p-4 rounded-lg">
              <h3 className="font-bold text-white mb-4">Recent Achievements</h3>
              <ul className="space-y-4">
                {user.achievements.map(ach => (
                  <li key={ach.title} className="flex items-start space-x-3">
                    <div className="bg-[#2a2a2e] p-2 rounded-md"><AchievementIcon iconName={ach.icon} /></div>
                    <div>
                      <h4 className="font-semibold text-white">{ach.title}</h4>
                      <p className="text-sm text-gray-400">{ach.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1e1e21] p-4 rounded-lg">
                <h3 className="font-bold text-white mb-4">Overall Engagement</h3>
                <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center justify-between"><span className="flex items-center"><Heart size={16} className="mr-2 text-red-500"/>Likes</span> <span>{user.engagement.likes}</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center"><Users size={16} className="mr-2 text-blue-500"/>Followers</span> <span>{user.engagement.followers}</span></li>
                    <li className="flex items-center justify-between"><span className="flex items-center"><UserPlus size={16} className="mr-2 text-green-500"/>Following</span> <span>{user.engagement.following}</span></li>
                </ul>
            </div>
          </aside>

          {/* Main Content: Reviews */}
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Reviews</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Sort by:</span>
                    <select className="bg-[#2a2a2e] border border-gray-700 rounded-md px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Most Upvoted</option>
                    </select>
                </div>
            </div>
            <div className="space-y-6">
                {user.reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Button variant="secondary">See more photos</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
