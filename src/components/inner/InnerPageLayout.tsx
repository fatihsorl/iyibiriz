import { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { InnerFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

export function InnerPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>{children}</main>
      <InnerFooter />
    </>
  );
}
