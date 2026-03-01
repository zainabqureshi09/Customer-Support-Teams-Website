import { useState } from "react";

interface LogoWallProps {
  items: { imgUrl: string; altText: string }[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

const LogoWall = ({
  items,
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 20vmin, 20rem)",
  duration = "40s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
}: LogoWallProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-nowrap",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/2)]",
    direction === "vertical" ? "flex-col h-full" : "flex-row w-full",
  ].join(" ");

  const marqueeClass = [
    "flex-shrink-0",
    "flex",
    "items-center",
    "justify-around",
    "gap-[calc(var(--size)/2)]",
    "min-w-full",
    direction === "vertical" ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee-horizontal",
    isPaused && pauseOnHover ? "[animation-play-state:paused]" : "",
  ].join(" ");

  return (
    <article
      className="flex flex-col gap-[calc(var(--size)/2)] py-[calc(var(--size)/2)] px-0 overflow-hidden"
      style={
        {
          "--size": size,
          "--duration": duration,
          "--color-text": textColor,
          "--color-bg": bgColor,
          "--color-bg-accent": bgAccentColor,
          color: "var(--color-text)",
          backgroundColor: "var(--color-bg)",
        } as React.CSSProperties
      }
    >
      <div
        className={wrapperClass}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={marqueeClass} style={{ animation: `${direction === 'vertical' ? 'marquee-vertical' : 'marquee-horizontal'} var(--duration) linear infinite` }}>
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className="bg-[var(--color-bg-accent)] rounded-[0.5rem] object-contain aspect-video p-[calc(var(--size)/10)] w-[var(--size)]"
            />
          ))}
        </div>
        <div className={marqueeClass} aria-hidden="true" style={{ animation: `${direction === 'vertical' ? 'marquee-vertical' : 'marquee-horizontal'} var(--duration) linear infinite` }}>
          {items.map((item, idx) => (
            <img
              key={`dup-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className="bg-[var(--color-bg-accent)] rounded-[0.5rem] object-contain aspect-video p-[calc(var(--size)/10)] w-[var(--size)]"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default LogoWall;
