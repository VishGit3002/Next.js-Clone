import { Button } from "@/components/ui/button";
import { ChevronRight, Copy } from "lucide-react";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#000000] h-screen pt-20 flex-col items-center justify-center text-center space-y-6">
      <h2 className="pt-12 font-bold text-xl">
        Catch up on what we released at Next.js Conf 25
      </h2>
      <Button className="rounded-full ">
        Find out more
        <ChevronRight />
      </Button>
      <Button className="ml-4 rounded-full" variant="outline">
        Find out more
        <ChevronRight />
      </Button>
      <h1 className="text-7xl font-bold mt-20">
        The React Framework for the Web
      </h1>
      <h3 className="text-xl mt-15 text-[#888888]">
        Used by some of the world&apos;s largest companies, Next.js enables you
        to create <span className="text-white">high-</span>
      </h3>
      <h3 className="text-xl mt-[-15px] text-[#888888]">
        <span className="text-white">quality web applications</span> with the
        power of React components.
      </h3>
      <div className="mt-20 space-x-5 bg-white">
        <Button variant="secondary" className="bg-white text-black h-13">
          Get Started
        </Button>
        <Button variant="outline" className="h-13">
          Learn Next.js
        </Button>
        <div className="mt-4 text-[#888888] hover:text-gray-200"> ~ npx create-next-app@latest
        </div>
      </div>
    </div>
  );
}
