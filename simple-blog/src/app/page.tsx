import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const loading = false;
  const posts = [
    {
      id: "post_001",
      title: "When you mistake salt for sugar in your morning coffee...",
      content:
        "The result? You're awake, but with a taste of regret and tears 😅",
      createdAt: "2025-10-06T08:15:00Z",
      author: {
        name: "Ali the Coffee Lover",
        image: "https://picsum.photos/200",
      },
      _count: {
        comments: 12,
        likes: 87,
      },
    },
    {
      id: "post_002",
      title: "Work meeting or patience test?",
      content:
        "When someone says, 'Let's take a step back...' and you're just looking for the exit.",
      createdAt: "2025-10-06T09:30:00Z",
      author: {
        name: "Maryam the Manager",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      },
      _count: {
        comments: 25,
        likes: 143,
      },
    },
    {
      id: "post_003",
      title: "Student life in one photo",
      content:
        "Instant noodles, a laptop, and hope that the professor doesn’t check their inbox.",
      createdAt: "2025-10-06T10:45:00Z",
      author: {
        name: "Sina the Night Owl",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      },
      _count: {
        comments: 8,
        likes: 65,
      },
    },
    {
      id: "post_004",
      title: "When the internet goes down...",
      content:
        "And you're forced to interact with real life. It was scary, but I survived.",
      createdAt: "2025-10-06T11:20:00Z",
      author: {
        name: "Nazanin the Net Addict",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      },
      _count: {
        comments: 19,
        likes: 102,
      },
    },
    {
      id: "post_005",
      title: "Morning workout? More like a battle to wake up",
      content: "6 AM. My body: nope. My brain: nope. Alarm clock: YES!",
      createdAt: "2025-10-06T06:00:00Z",
      author: {
        name: "Reza the Unfit",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
      _count: {
        comments: 14,
        likes: 76,
      },
    },
  ];
  
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8 text-cyan-800">Simple Blog</h1>

        {loading ? (
          <p>it is loading....</p>
        ) : posts.length === 0 ? (
          <h1>there is no post to show</h1>
        ) : (
          posts.map((post) => <PostCard post={post} key={post.id} />)
        )}
      </main>
    </>
  );
}
