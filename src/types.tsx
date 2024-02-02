interface User {
  image: { png: string; webp: string };
  username: string;
}

export interface ContentProps {
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: User;
}
