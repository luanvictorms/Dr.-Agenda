"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="z-0 object-cover opacity-40"
        priority
      />

      <div className="absolute inset-0 z-[1] bg-blue-800/50"></div>

      <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white drop-shadow-md md:text-4xl lg:text-5xl">
          Manage your clinic with ease
        </h1>
        <p className="mb-8 max-w-md text-center text-lg text-white md:max-w-lg md:text-xl">
          Schedule appointments, manage patients and optimize your time
        </p>
        <Link href="/authentication">
          <Button
            size={isMobile ? "default" : "lg"}
            className="bg-white px-6 font-semibold text-blue-900 hover:bg-blue-50"
          >
            Start now <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
