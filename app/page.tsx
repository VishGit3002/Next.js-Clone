"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Copy } from "lucide-react";
import { animate, svg, stagger } from "animejs";
import { useEffect } from "react";
// import Image from "next/image";

export default function Home() {
  const copyText = () => {
    const textToCopy = document.querySelector(".copy")?.innerHTML;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          console.log("Text copied to clipboard");
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  useEffect(() => {
    animate(svg.createDrawable(".svg"), {
      draw: ["0 0 ", "0 1", "1 1"],
      easing: "easeInOutSine",
      duration: 2000,
      loop: true,
      direction: "alternate",
      strokeDasharray: ["0px, 1000px", "1000px, 1000px"],
    });
    animate(".rotate", {});
  }, []);
  return (
    <div className="bg-black h-screen pt-20 flex-col items-center justify-center text-center space-y-6">
      <h2 className="pt-12 font-bold text-xl rotate">
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
        &nbsp;The React Framework for the Web&nbsp;
      </h1>
      <h3 className="text-xl mt-15 text-[#888888]">
        Used by some of the world&apos;s largest companies, Next.js enables you
        to create <span className="text-white">high-</span>
      </h3>
      <h3 className="text-xl mt-[-15px] text-[#888888]">
        <span className="text-white">quality web applications</span> with the
        power of React components.
      </h3>
      <div className="mt-20 space-x-5 ">
        <Button variant="default" className="bg-white text-black h-13 w-35">
          Get Started
        </Button>
        <Button variant="outline" className="h-13 w-35">
          Learn Next.js
        </Button>
      </div>
      <div className="flex justify-center items-center mt-4 text-[#888888]">
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 74 64"
          preserveAspectRatio="xMidYMid meet"
          className="h-4 w-auto mr-2"
          role="img"
        >
          <path
            className="svg"
            d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
            fill="none"
            stroke="white"
          />
        </svg>
        <div className="group flex items-center " onClick={copyText}>
          <p className="cursor-alias group-hover:text-gray-200 copy">
            ~ npx create-next-app@latest
          </p>
          <Copy className="h-4 w-5 ml-1 opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>
      </div>
      {/* Next page */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-400">
            Deploy faster
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      {/* Your code example */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
