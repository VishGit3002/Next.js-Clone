"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-black/90 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute h-[50vh] w-[50vw] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute h-[40vh] w-[40vw] bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse delay-1000" />
      </div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated Beams */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-full blur-3xl opacity-20 transform rotate-45"
        />
         <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            className="absolute top-0 left-0 w-full h-full"
         >
             {/* We can use SVG for more precise lines if needed, but for now CSS gradients + motion is good */}
         </motion.div>
      </div>
      
      {/* SVG Beams for the "shooting star" effect */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q50,0 100,50"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0], pathOffset: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
         <motion.path
          d="M100,0 Q50,100 0,100"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0], pathOffset: [0, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
           <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
