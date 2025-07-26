export interface Photo {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  isPro?: boolean; // To show the "UPGRADE PLAN" badge
}