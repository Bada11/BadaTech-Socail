export interface Post {
  id: string;
  image?: string; // Optional image field
  title?: string; // Optional title field
  content?: string;
  author: string;
  createdAt: Date;
  comments: PostComment[];
  likes: number;
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}
