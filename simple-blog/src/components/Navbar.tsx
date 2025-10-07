"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AuthButton from "./AuthButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const isAdmin = true; // Replace with actual admin check logic

  return (
    <>
      <header className="w-full border-b bg-white flex justify-center">
        <div className="container flex h-16 items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold ">
            MyApp
          </Link>
          <div className="flex items-center gap-4">
            {isAdmin && (
              <Button asChild variant={"default"} >
                <Link href="/admin/create">
                  <PlusCircle /> create
                </Link>
              </Button>
            )}
            <AuthButton />
          </div>
        </div>
      </header>
    </>
  );
}
