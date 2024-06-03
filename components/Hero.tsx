import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-3/4 mt-5">
      <div className="w-full px-5 flex justify-center items-center flex-col gap-8 self-stretch relative overflow-hidden lg:max-w-maxScreen mx-auto pb-5 pt-14 lg:py-35">
        <div className="flex flex-col justify-start sm:justify-center items-center gap-4 px-2">
          <div className="w-full md:w-[60%] sm:text-center text-4xl md:text-5xl">
            <span className="font-bold"> One Stop </span>
            <span className="font-bold">Destination</span>
            <span className="font-bold"> To Your </span>
            <span className="inline relative">
              <span className="text-orange-500 font-bold text-[1.75rem] sm:text-3xl md:!text-5xl !text-4xl z-10"> First Job </span>
              <Image
                alt="strike"
                loading="lazy"
                width="200"
                height="24"
                decoding="async"
                data-nimg="1"
                className="absolute -rotate-[1.5] !top-12 !left-5 md:block hidden"
                src="/Vector 61.svg"
                style={{ color: "transparent" }}
              />
            </span>
          </div>
          <p className="mt-4 text-base sm:text-lg sm:text-center">
            Your one-stop destination for DSA practice, interview experiences, and career opportunities.
          </p>
        </div>
        <div className="flex gap-3 mt-10 items-start flex-wrap">
          <Button className="rounded-full transition-all duration-500 ease-in-out bg-orange-500 text-white hover:bg-orange-600">Get Started</Button>
          <Button className="text-center rounded-full transition-all duration-500 ease-in-out bg-gray-50 text-black border border-gray-300 hover:bg-gray-200">Join Free</Button>
        </div>
        <div className="absolute right-0 top-1/2 lg:block hidden">
          <div className="bg-[#f97c07] inline-flex py-2 px-4 border-[2px] border-[#f97c07] relative">
            <p className="text-sm text-white text-normal">Jobs &amp; Internships</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" className="w-6 h-6 absolute -left-5 -top-5" style={{ fill: "rgb(249, 124, 7)" }}>
              <g filter="url(#Cursor_svg__a)">
                <path d="M11.892 23.711 7.334 7.72c-.236-.826.622-1.539 1.402-1.166l15.103 7.225a.992.992 0 0 1-.096 1.834l-6.212 2.2a1 1 0 0 0-.533.444l-3.266 5.68c-.441.766-1.597.625-1.84-.226"></path>
                <path d="m6.85 7.854 4.56 15.992c.363 1.275 2.097 1.487 2.758.337l3.266-5.679a.5.5 0 0 1 .267-.221l6.211-2.201c1.258-.446 1.349-2.175.144-2.751L8.954 6.106c-1.17-.56-2.457.51-2.104 1.748"></path>
              </g>
              <defs>
                <filter id="Cursor_svg__a" width="23.124" height="23.979" x="4.288" y="4.454" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_230_15038"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_230_15038" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute right-[20%] bottom-14 lg:block hidden">
          <div className="bg-[#28d4dc] inline-flex py-2 px-4 border-[2px] border-[#28d4dc] relative">
            <p className="text-sm text-white text-normal">Problem Solving</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" className="w-6 h-6 absolute -left-5 -top-5" style={{ fill: "rgb(40, 212, 220)" }}>
              <g filter="url(#Cursor_svg__a)">
                <path d="M11.892 23.711 7.334 7.72c-.236-.826.622-1.539 1.402-1.166l15.103 7.225a.992.992 0 0 1-.096 1.834l-6.212 2.2a1 1 0 0 0-.533.444l-3.266 5.68c-.441.766-1.597.625-1.84-.226"></path>
                <path d="m6.85 7.854 4.56 15.992c.363 1.275 2.097 1.487 2.758.337l3.266-5.679a.5.5 0 0 1 .267-.221l6.211-2.201c1.258-.446 1.349-2.175.144-2.751L8.954 6.106c-1.17-.56-2.457.51-2.104 1.748"></path>
              </g>
              <defs>
                <filter id="Cursor_svg__a" width="23.124" height="23.979" x="4.288" y="4.454" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_230_15038"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_230_15038" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-0 top-2/3 lg:block hidden">
          <div className="bg-[#22a774] inline-flex py-2 px-4 border-[2px] border-[#22a774] relative">
            <p className="text-sm text-white text-normal">Company Wise Interviews</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" className="w-6 h-6 absolute -right-5 -top-5 rotate-90" style={{ fill: "rgb(34, 167, 116)" }}>
              <g filter="url(#Cursor_svg__a)">
                <path d="M11.892 23.711 7.334 7.72c-.236-.826.622-1.539 1.402-1.166l15.103 7.225a.992.992 0 0 1-.096 1.834l-6.212 2.2a1 1 0 0 0-.533.444l-3.266 5.68c-.441.766-1.597.625-1.84-.226"></path>
                <path d="m6.85 7.854 4.56 15.992c.363 1.275 2.097 1.487 2.758.337l3.266-5.679a.5.5 0 0 1 .267-.221l6.211-2.201c1.258-.446 1.349-2.175.144-2.751L8.954 6.106c-1.17-.56-2.457.51-2.104 1.748"></path>
              </g>
              <defs>
                <filter id="Cursor_svg__a" width="23.124" height="23.979" x="4.288" y="4.454" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_230_15038"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_230_15038" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-[5%] top-1/3 lg:block hidden">
          <div className="bg-[#fe3559] inline-flex py-2 px-4 border-[2px] border-[#fe3559] relative">
            <p className="text-sm text-white text-normal">Interview Experiences</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29" className="w-6 h-6 absolute -right-5 -top-5 rotate-90" style={{ fill: "rgb(254, 53, 89)" }}>
              <g filter="url(#Cursor_svg__a)">
                <path d="M11.892 23.711 7.334 7.72c-.236-.826.622-1.539 1.402-1.166l15.103 7.225a.992.992 0 0 1-.096 1.834l-6.212 2.2a1 1 0 0 0-.533.444l-3.266 5.68c-.441.766-1.597.625-1.84-.226"></path>
                <path d="m6.85 7.854 4.56 15.992c.363 1.275 2.097 1.487 2.758.337l3.266-5.679a.5.5 0 0 1 .267-.221l6.211-2.201c1.258-.446 1.349-2.175.144-2.751L8.954 6.106c-1.17-.56-2.457.51-2.104 1.748"></path>
              </g>
              <defs>
                <filter id="Cursor_svg__a" width="23.124" height="23.979" x="4.288" y="4.454" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_230_15038"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_230_15038" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
