
import PostForm from "@/components/PostForm";
import Stories from "@/components/Stories";
import { PostCard } from "@/components/PostCard";
import { posts } from "../../data/posts";
import { auth } from "@/auth";
import SignupPage from "./signup/page";

const HomePage = async () => {
  const session = await auth();

  if(!session?.user) {
    return (
      <SignupPage />
    )
  }
  if (session?.user) {
    return (
      <div className="w-full lg:max-w-3xl mx-auto">
        <PostForm />
        <Stories />
        <div className="p-4 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
};

export default HomePage;
