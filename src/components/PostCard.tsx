import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircleIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface PostComment {
  id: string;
  text: string;
  username: string;
}

interface Post {
  id: string;
  image?: string;
  title?: string;
  content?: string;
  author: string;
  createdAt: Date;
  comments: PostComment[];
  likes: number;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className=" max-auto lg:max-w-[800px] mb-4 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>
                {post.author.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground">{post.author}</div>
          </div>
          <div className="text-xs text-gray-500">
            {post.createdAt.toDateString()}
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{post.title}</CardTitle>
      </CardHeader>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-100 object-contain justify-center rounded-t-md"
      />
      <CardContent>
        <p className="text-sm ">{post.content}</p>
      </CardContent>
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2 p-3">
          <div className="text-sm text-muted-foreground">
            {post.likes} Likes
          </div>
          <Heart />
          <MessageCircleIcon />
        </div>
        <Badge variant="outline">{post.comments.length} Comments</Badge>
      </div>
      <CardFooter className="flex items-center">
        {post.comments.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="comments">
              <AccordionTrigger className="text-sm">
                View Comments
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 mt-2">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="text-sm text-gray-700">
                      <Separator className="my-2" />
                      <span className="font-medium text-muted-foreground">
                        {comment.username}:{" "}
                      </span>
                      {comment.text}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardFooter>
    </Card>
  );
}
