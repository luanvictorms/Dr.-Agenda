"use client";

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
  function handleSignOut() {
    authClient.signOut();
    redirect("/authentication");
  }

  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export default SignOutButton;
