"use client";

import { redirect } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
  function handleSignOut() {
    authClient.signOut();
    toast.success("Signed out successfully");
    redirect("/authentication");
  }

  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export default SignOutButton;
