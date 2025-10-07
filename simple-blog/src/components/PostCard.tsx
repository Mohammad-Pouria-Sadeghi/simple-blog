import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";

type Post =  {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string | null;
    image: string | null;
  };
  _count: {
    comments: number;
    likes: number;
  };
}
export function PostCard({
 post
}: {post: Post}) {

  const likeLoading = false

  const liked = true
  return (
    <Card className="min-w-[450]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.image || ""} />
            <AvatarFallback>{post.author.name?.[0] || "A"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <CardTitle className="text-xl">card title</CardTitle>
      </CardHeader>
      <CardContent>{/* <MarkdownRenderer content={content} /> */}</CardContent>
      <CardFooter className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1 border border-gray-500"
        >
          <Heart
            className={`h-4 w-4 ${
              likeLoading
                ? "animate-pulse"
                : liked
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />
          <span>{10}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1 border border-gray-500"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{post._count.comments}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
