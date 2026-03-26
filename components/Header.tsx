"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Projeto", href: "/projeto" },
  { label: "Elenco", href: "/elenco" },
  { label: "SVI", href: "/svi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-verde.png"
              alt="Logo do time Vôlei Glória"
              width={50}
              height={100}
            />
            <span className="text-2xl font-medium">Vôlei Glória</span>
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
            <div className="absolute top-14 w-full p-2.5 space-y-2 bg-white/80 rounded-sm border border-slate-950/15 flex flex-col">
              <Link
                href="/volei-gloria"
                className="px-4 py-2 flex items-center font-semibold gap-3 bg-emerald-100 rounded-sm"
              >
                <div className="w-3.5 h-3.5 rounded-full border border-emerald-400 p-0.5">
                  <div className="bg-emerald-400 w-full h-full rounded-full"></div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-950">
                  <Image
                    src="/logo-verde.png"
                    alt="Logo do time Vôlei Glória"
                    width={35}
                    height={100}
                  />
                  Vôlei Glória
                </div>
              </Link>
              <Link
                href="/saltando-para-o-futuro"
                className="px-4 py-2 flex items-center font-semibold gap-3 bg-emerald-100 rounded-sm"
              >
                <div className="w-3.5 h-3.5 rounded-full border border-emerald-400 p-0.5">
                  <div className="bg-emerald-400 w-full h-full rounded-full"></div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-950">
                  <Image
                    src="/logo-verde.png"
                    alt="Logo do time Vôlei Glória"
                    width={35}
                    height={100}
                  />
                  Projeto
                </div>
              </Link>
            </div>
          )}
        </div>

        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="opacity-50">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
