import { siteConfig } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand-lockup" aria-label="İyibiriz ana sayfa">
        <Image src={siteConfig.assets.mark} alt="İyibiriz" width={182} height={145} className="mark" />
        <small className="tagline">{siteConfig.tagline}</small>
      </Link>
      <p>{siteConfig.address}</p>
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <p>{siteConfig.copyright}</p>
    </footer>
  );
}

export function InnerFooter() {
  return (
    <footer className="inner-footer">
      <b>İYİBİRİZ</b>
      <span>{siteConfig.address}</span>
      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
    </footer>
  );
}
