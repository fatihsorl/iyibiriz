import { siteConfig } from "@/lib/content";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand-lockup" aria-label="İyibiriz ana sayfa">
        <span className="mark" aria-hidden="true" />
        <span>
          <span className="wordmark">
            <b>İYİ</b>BİRİZ
          </span>
          <small className="tagline">{siteConfig.tagline}</small>
        </span>
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
