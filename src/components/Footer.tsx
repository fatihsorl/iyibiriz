import { siteConfig, navLinks } from "@/lib/content";
import { InstagramIcon } from "./InstagramIcon";
import { Logo } from "./Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white/75">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Logo size="footer" />
          <p className="mt-3 text-sm text-white/60">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs text-white/40">{siteConfig.copyright}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#iletisim" className="transition hover:text-white">
            İletişim
          </Link>
        </nav>

        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white/10"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-5 w-5" />
          @burcu_sen
        </a>
      </div>
    </footer>
  );
}
