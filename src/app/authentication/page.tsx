"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="account" className="w-[90%] md:w-[40%]">
        <TabsList className="w-[100%]">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="register">Create account</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
