// src/components/photo/ReviewCard.tsx
import Image from 'next/image';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { UserReview } from '@/types';

interface ReviewCardProps {
  review: UserReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-[#2a2a2e] p-6 rounded-lg flex gap-6">
      {/* Author Avatar */}
      <div className="flex-shrink-0">
        <Image src={review.author.avatarUrl} alt={review.author.name} width={48} height={48} className="rounded-full" />
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white">{review.title}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-400 flex gap-4">
            <span>{review.upvotes} Upvotes</span>
            <span>{review.downvotes} Downvotes</span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-300">{review.comment}</p>

        {/* Attached Images */}
        <div className="flex gap-4 mt-4">
          {review.images.map(img => (
            <div key={img.id} className="w-40 h-40 relative rounded-lg overflow-hidden">
                <Image src={img.url} alt="Review image" layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
