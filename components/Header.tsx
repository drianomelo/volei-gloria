import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-verde.png"
            alt="Logo do time Vôlei Glória"
            width={50}
            height={100}
          />
          <span className="text-2xl font-medium">Vôlei Glória</span>
        </Link>

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
