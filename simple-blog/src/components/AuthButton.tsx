"use client";

import React from "react";
import { Button } from "./ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  return session ? (
    <Button variant="outline" onClick={() => signOut()}>
      Logout
    </Button>
  ) : (
    <Button variant="outline" onClick={() => signIn("google")}>
      Login with Google
    </Button>
  );
};

export default AuthButton;
