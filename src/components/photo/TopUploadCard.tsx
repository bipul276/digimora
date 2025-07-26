// src/components/photo/TopUploadCard.tsx
import Image from 'next/image';
import { Star } from 'lucide-react';
import { TopUpload } from '@/types';

interface TopUploadCardProps {
  upload: TopUpload;
}

const TopUploadCard: React.FC<TopUploadCardProps> = ({ upload }) => {
  return (
    <div className="bg-[#2a2a2e] rounded-lg p-4 flex gap-4 items-center relative">
        {upload.isPro && (
            <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                UPGRADE PLAN
            </div>
        )}
      <Image src={upload.imageUrl} alt={upload.title} width={128} height={128} className="w-32 h-32 rounded-md object-cover" />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white">{upload.title}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < upload.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} />
          ))}
          <span className="text-sm text-gray-400 ml-2">Rating {upload.rating.toFixed(1)}</span>
          <span className="text-sm text-gray-400 ml-4">Likes: {upload.likes.toLocaleString()}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {upload.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center mt-4">
            <Image src={upload.author.avatarUrl} alt={upload.author.name} width={24} height={24} className="rounded-full mr-2" />
            <span className="text-sm text-gray-400">{upload.author.name}</span>
        </div>
      </div>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 self-end">
        View
      </button>
    </div>
  );
};

export default TopUploadCard;
