"use client";

import { navLinks, siteConfig } from "@/lib/content";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Ana sayfa">
          <Logo priority size="header" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={!link.href.includes("#")}
              className={`text-sm font-medium transition sm:text-[15px] ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white sm:inline-flex"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <Link
            href="/#iletisim"
            scroll={false}
            className="btn-primary-on-dark hidden !px-5 !py-2 sm:inline-flex"
          >
            İletişim
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black lg:hidden"
          >
            <nav className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={!link.href.includes("#")}
                  className="rounded-lg px-3 py-2.5 text-white/85 transition hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-white/85"
                onClick={() => setMobileOpen(false)}
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
              <Link
                href="/#iletisim"
                scroll={false}
                className="btn-primary-on-dark mt-2 text-center"
                onClick={() => setMobileOpen(false)}
              >
                İletişim
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
