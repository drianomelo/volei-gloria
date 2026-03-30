"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { apps } from "@/config/apps";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const currentApp =
    Object.values(apps).find((app) => pathname.startsWith(app.basePath)) ||
    apps.volei;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5 relative" ref={dropdownRef}>
          <Link href={currentApp.basePath} className="flex items-center gap-2">
            <Image
              src={currentApp.logo}
              alt={currentApp.name}
              width={50}
              height={100}
            />
            <span className="text-2xl font-medium">{currentApp.name}</span>
          </Link>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-5 h-5 mt-px flex items-center cursor-pointer rounded-sm justify-center bg-slate-950/6"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute top-14 w-full p-2.5 space-y-2 bg-white/80 rounded-sm border border-slate-950/10 flex flex-col">
              {Object.values(apps).map((app) => {
                const isActive = pathname.startsWith(app.basePath);

                return (
                  <Link
                    key={app.basePath}
                    href={app.basePath}
                    className={`px-4 py-2 flex items-center font-semibold gap-3 rounded-sm ${
                      isActive ? app.theme.bg : "bg-transparent"
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border p-0.5 ${
                        isActive ? app.theme.border : "border-black/20"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${
                          isActive ? app.theme.dot : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`flex items-center gap-2 ${
                        isActive ? "text-slate-950" : "text-slate-950/50"
                      }`}
                    >
                      <Image
                        src={app.logo}
                        alt={app.name}
                        width={35}
                        height={100}
                        className={isActive ? "grayscale-0" : "grayscale"}
                      />
                      {app.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {currentApp.nav.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive
                      ? `font-semibold bg-linear-to-r ${currentApp.theme.gradientFrom} ${currentApp.theme.gradientTo} bg-clip-text text-transparent`
                      : "text-slate-950/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-5 w-px bg-slate-950/20"></div>

          <Link
            className="bg-zinc-950 w-fit text-white py-2 px-6 rounded-full"
            href={currentApp.cta.href}
          >
            {currentApp.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
