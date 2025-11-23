"use client";
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-next-app@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Announcement Pill */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 transition-colors hover:bg-white/10 cursor-pointer backdrop-blur-sm max-w-full overflow-hidden whitespace-nowrap">
            <span className="rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-semibold text-blue-400 border border-blue-500/20 shrink-0">
              New
            </span>
            <span className="truncate">Catch up on what we released at Next.js Conf 25</span>
            <ArrowRight className="h-3 w-3 shrink-0" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-8 max-w-5xl mx-auto px-4">
            The React Framework for the Web
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Used by some of the world&apos;s largest companies, Next.js enables you to create{" "}
            <span className="text-white font-medium">high-quality web applications</span> with the power of React components.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto px-4">
            <Link
              href="#"
              className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-zinc-200 transition-colors text-base w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="h-12 px-8 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 text-base w-full sm:w-auto"
            >
              Learn Next.js
            </Link>
          </div>

          {/* Install Command */}
          <div 
            onClick={handleCopy}
            className="group relative flex items-center gap-3 rounded-lg border border-white/10 bg-black/50 px-6 py-3 font-mono text-sm text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200 cursor-pointer backdrop-blur-sm mx-4"
          >
            <span className="text-zinc-600 select-none">~</span>
            <span className="truncate">npx create-next-app@latest</span>
            <div className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white/10 opacity-0 transition-opacity group-hover:opacity-100 shrink-0">
              {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </div>
          </div>

        </div>
      </div>
      
      <BackgroundBeams /> 
    </div>
  );
};

export default Page;