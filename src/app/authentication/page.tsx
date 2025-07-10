import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./_components/login-form";
import SignUpForm from "./_components/sign-up-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-800">
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-6 left-6 z-10">
        <Image src="/LogoWhite.png" alt="Dr. Agenda" width={136} height={28} />
      </div>
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
