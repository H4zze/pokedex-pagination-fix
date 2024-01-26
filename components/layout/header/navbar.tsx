"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center bg-white/90">
        <div className="mx-5 flex h-12 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-l">
            <div>
              <img src="/kantodex-logo.svg" className="object-cover max-h-5" alt="" />
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </>
  );
}
