// src/types/index.d.ts

// Represents a single photo upload/review by a user
export interface UserReview {
  id: string;
  title: string;
  rating: number; // A number from 0 to 5
  comment: string;
  upvotes: number;
  downvotes: number;
  images: { id: string; url: string }[];
  author: {
    name: string;
    avatarUrl: string;
  };
}

// Represents the user's profile data
export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  coverImageUrl: string;
  joinDate: string;
  location: string;
  achievements: {
    icon: 'PhotoExpert' | 'Explorer' | 'Adventurer';
    title: string;
    description: string;
  }[];
  engagement: {
    likes: number;
    followers: number;
    following: number;
  };
  reviews: UserReview[];
}

// NEW: Represents a top photo upload on the Discover page
export interface TopUpload {
    id: string;
    title: string;
    imageUrl: string;
    author: {
        name: string;
        avatarUrl: string;
    };
    rating: number;
    likes: number;
    tags: string[];
    isPro?: boolean;
}

// NEW: Represents a recent comment on the Discover page
export interface RecentComment {
    id: string;
    author: {
        name: string;
        avatarUrl: string;
    };
    comment: string;
    onPhoto: string; // Title of the photo commented on
    rating: number;
}
