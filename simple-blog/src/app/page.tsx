import { Navbar } from "@/components/Navbar";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8 text-cyan-800">Simple Blog</h1>


        
      </main>
    </>
  );
}
