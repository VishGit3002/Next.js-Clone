"use client";
import React, { useEffect } from "react";
import { animate, svg, stagger } from 'animejs';
import { motion } from "motion/react"
const Page = () => {
  useEffect(() => {animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});
  }, []);
  return (
    <div className="pt-16 flex justify-center h-screen relative">
      sd
      <svg
        width="1"
        height="140"
        viewBox="0 0 1 140"
        fill="none"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        className="text-neutral-100 dark:text-neutral-800 ml-3 line"
      >
        <path d="M0.5 0.5V479" stroke="currentColor" strokeWidth="2"></path>
        <path
          d="M0.5 0.5V479"
          stroke="url(#gradient-«R22cjqtb»)"
          strokeWidth="2"
        ></path>
        <defs>
          <linearGradient
            id="gradient-«R22cjqtb»"
            gradientUnits="userSpaceOnUse"
            x1="2"
            y1="231.86909262440167"
            x2="2"
            y2="403.8472747284686"
          >
            <stop offset="0%" stopColor="transparent"></stop>
            <stop offset="50%" stopColor="var(--neutral-200)"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Page;
