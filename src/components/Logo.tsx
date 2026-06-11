import Image from "next/image";
import { images } from "@/lib/images";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  return (
    <Image
      src={images.logo}
      alt="Perfomanto Freight Systems Inc."
      width={220}
      height={48}
      unoptimized
      className={`h-10 w-auto object-contain object-left lg:h-11 ${
        variant === "white" ? "brightness-0 invert" : ""
      } ${className}`}
      priority
    />
  );
}
