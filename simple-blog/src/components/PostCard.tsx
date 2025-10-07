import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface PostCardProps {
  title?: string;
  excerpt?: string;
  author?: {
    name: string;
    image?: string;
  };
  date?: string;
  slug?: string;
}

export function PostCard({
  title,
  excerpt,
  author,
  date,
  slug,
}: PostCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={author.image || ""} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base">{author.name}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {date}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-sm text-primary hover:underline"
        >
          Read more →
        </Link>
      </CardContent>
    </Card>
  );
}
