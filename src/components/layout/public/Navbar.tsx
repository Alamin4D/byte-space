"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  // Check active route
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Creators",
      href: "/creators",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between bg-transparent bg-gradient-to-b from-black/20 to-transparent px-4 text-white backdrop-blur-sm sm:px-6 md:px-12">

      <Link
        href="/"
        className="flex shrink-0 cursor-pointer items-center gap-2"
      >
        <Image
          src="/images/logo.png"
          alt="ByteSpace Logo"
          width={24}
          height={30}
        />

        <Image
          src="/images/ByteSpace.png"
          alt="ByteSpace"
          width={110}
          height={110}
          className="object-contain"
        />
      </Link>


      <div className="hidden items-center gap-8 text-sm font-medium md:flex">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 transition-opacity ${
                active
                  ? "opacity-100"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {item.name}

              {active && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#CCFF00]" />
              )}
            </Link>
          );
        })}
      </div>


      <div className="flex shrink-0 items-center gap-2 sm:gap-4">

        <div
          className="hidden text-sm font-medium text-white transition-colors sm:inline-flex"
        >
          <Link href="/register">Sign In</Link>
        </div>


        <div
          className="hidden text-sm font-medium text-white transition-colors sm:inline-flex"
        >
          <Link href="/register">Join Us</Link>
        </div>


        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10 focus:outline-none"
          aria-label="Shopping bag"
        >
          <ShoppingBag className="h-5 w-5" />
        </button>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10 focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col justify-between border-l-blue-400/20 bg-[#0E52FE] p-6 text-white"
            >

              <div>
                <SheetTitle className="sr-only">
                  Navigation Menu
                </SheetTitle>

                <SheetDescription className="sr-only">
                  Explore ByteSpace navigation links for mobile viewport.
                </SheetDescription>
              </div>


              <div className="flex flex-col space-y-6 pt-10 text-lg font-semibold">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative border-b border-white/10 pb-2 transition-colors ${
                        active
                          ? "text-[#CCFF00]"
                          : "text-white hover:text-[#CCFF00]"
                      }`}
                    >
                      {item.name}

                      {active && (
                        <span className="absolute bottom-0 left-0 h-[2px] w-12 rounded-full bg-[#CCFF00]" />
                      )}
                    </Link>
                  );
                })}
              </div>


              <div className="flex w-full flex-col gap-3 pb-6">

                <Button
                  render={Button}
                  className="h-12 w-full rounded-xl border border-white/20 bg-white/5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Link href="/register">Sign In</Link>
                </Button>


                <Button
                  render={Button}
                  className="h-12 w-full rounded-xl bg-[#CCFF00] text-base font-bold text-black shadow-lg transition-colors hover:bg-[#b0dc00]"
                >
                  <Link href="/register">Join Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
