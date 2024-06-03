import Hero from "@/components/Hero";
import { NavigationMenuDemo } from "@/components/NavMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-center flex flex-col items-center">
      <NavigationMenuDemo />
      <Hero />
      <div className="mt-16 space-x-4">
        <Link href="/form">
          <button className="text-center text-[16px] px-6 py-3 rounded-xl transition-all duration-500 ease-in-out bg-blue-500 text-white hover:bg-blue-600">
            Create Event
          </button>
        </Link>
        <Link href="/events">
          <button className="text-center text-[16px] px-6 py-3 rounded-xl transition-all duration-500 ease-in-out bg-green-500 text-white hover:bg-green-600">
            Events List
          </button>
        </Link>
        <Link href="/event-details">
          <button className="text-center text-[16px] px-6 py-3 rounded-xl transition-all duration-500 ease-in-out bg-red-500 text-white hover:bg-red-600">
            Event Details
          </button>
        </Link>
      </div>
    </div>
  );
}
