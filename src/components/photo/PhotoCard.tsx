// src/components/photo/PhotoCard.tsx
import Image from 'next/image';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

// We can reuse the Photo type from our main types file
export interface Photo {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  isPro?: boolean;
}

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="group relative bg-[#2a2a2e] rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={500}
          height={500}
          className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
        />
        {photo.isPro && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            UPGRADE PLAN
          </div>
        )}
        <div className="absolute top-2 left-2 p-1.5 bg-black bg-opacity-40 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal size={20} className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg truncate">{photo.title}</h3>
        <p className="text-gray-400 text-sm mt-1 h-10 overflow-hidden">{photo.description}</p>
        <div className="flex justify-end items-center mt-3 text-gray-500 text-xs space-x-4">
          <div className="flex items-center space-x-1">
            <Heart size={14} />
            <span>{photo.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle size={14} />
            <span>{photo.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
