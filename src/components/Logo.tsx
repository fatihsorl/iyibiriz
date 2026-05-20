import Image from "next/image";
import { siteConfig } from "@/lib/content";

type LogoSize = "header" | "footer";

type LogoProps = {
  className?: string;
  size?: LogoSize;
  priority?: boolean;
};

const sizeClasses: Record<LogoSize, string> = {
  header: "h-16 w-auto max-w-[200px] sm:h-[4.5rem] sm:max-w-[240px] md:h-20 md:max-w-[280px]",
  footer: "h-12 w-auto max-w-[180px] sm:h-14 sm:max-w-[220px]",
};

export function Logo({
  className = "",
  size = "header",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={siteConfig.assets.logo}
      alt={`${siteConfig.name} logo`}
      width={282}
      height={209}
      className={`object-contain ${sizeClasses[size]} ${className}`}
      priority={priority}
    />
  );
}
