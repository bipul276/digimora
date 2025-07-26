// src/components/photo/RecentCommentCard.tsx
import Image from 'next/image';
import { Star } from 'lucide-react';
import { RecentComment } from '@/types';

interface RecentCommentCardProps {
  comment: RecentComment;
}

const RecentCommentCard: React.FC<RecentCommentCardProps> = ({ comment }) => {
  return (
    <div className="bg-[#2a2a2e] p-4 rounded-lg">
      <div className="flex items-center mb-3">
        <Image src={comment.author.avatarUrl} alt={comment.author.name} width={40} height={40} className="rounded-full" />
        <div className="ml-3">
          <h4 className="font-semibold text-white">{comment.author.name}</h4>
          <p className="text-xs text-gray-400">commented on <span className="text-yellow-400">{comment.onPhoto}</span></p>
        </div>
      </div>
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} />
        ))}
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{comment.comment}</p>
    </div>
  );
};

export default RecentCommentCard;
