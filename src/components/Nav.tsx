"use client";

import { navLinks, siteConfig } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="site-nav">
      <Link href="/" className="brand-lockup" aria-label="İyibiriz ana sayfa">
        <Image src={siteConfig.assets.mark} alt="İyibiriz" width={182} height={145} className="mark" priority />
        <small className="tagline">{siteConfig.tagline}</small>
      </Link>

      <button
        type="button"
        className="menu-btn"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Kapat" : "Menü"}
      </button>

      <nav>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={isActive(link.href) ? "active" : ""}>
            {link.label}
          </Link>
        ))}
        <a className="nav-cta" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Tanışma Görüşmesi")}`}>
          Tanışma görüşmesi ↗
        </a>
      </nav>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Tanışma Görüşmesi")}`}
          onClick={() => setOpen(false)}
        >
          Tanışma görüşmesi ↗
        </a>
      </div>
    </header>
  );
}
