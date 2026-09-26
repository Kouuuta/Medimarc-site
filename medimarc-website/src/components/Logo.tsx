import { useState } from "react";
import { images } from "../data/company";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

/**
 * The supplied logo.png is a wide raster file with transparent padding, so it
 * is cropped to its content box and constrained by height. If it ever fails to
 * decode we fall back to a vector mark rather than a broken image.
 */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const light = tone === "light";

  if (failed) {
    return (
      <span
        className={`inline-flex items-center gap-2.5 ${className}`}
      >
        <MedimarcMark />
        <span className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display text-[19px] font-bold tracking-tight ${
              light ? "text-paper" : "text-[#0A8FCB]"
            }`}
          >
            Medimarc
          </span>
          <span
            className={`font-display text-[15px] font-medium ${
              light ? "text-paper/60" : "text-muted"
            }`}
          >
            Trading
          </span>
        </span>
      </span>
    );
  }

  return (
    <img
      src={images.logo}
      alt="Medimarc Trading"
      width={160}
      height={40}
      onError={() => setFailed(true)}
      className={`h-9 w-auto object-contain object-left ${
        light ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}

function MedimarcMark() {
  const stripes = [0, 1, 2, 3, 4, 5];
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
      {stripes.map((i) => (
        <rect key={`t${i}`} x={14 + i * 2} y={2} width={1.3} height={12} fill="#B01BB0" />
      ))}
      {stripes.map((i) => (
        <rect key={`b${i}`} x={14 + i * 2} y={26} width={1.3} height={12} fill="#B01BB0" />
      ))}
      {stripes.map((i) => (
        <rect key={`l${i}`} x={2} y={14 + i * 2} width={12} height={1.3} fill="#B01BB0" />
      ))}
      <rect
        x="12.5"
        y="12.5"
        width="15"
        height="15"
        transform="rotate(45 20 20)"
        fill="#FFFFFF"
        stroke="#0A8FCB"
        strokeWidth="2.5"
      />
    </svg>
  );
}
