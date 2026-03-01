import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  mainColor?: string;
  glowColor?: string;
  borderColor?: string;
  stiffness?: number;
  damping?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus = ({
  sentence = "True Focus",
  mainColor = "#00d8ff",
  glowColor = "rgba(0, 216, 255, 0.6)",
  borderColor = "#00d8ff",
  stiffness = 100,
  damping = 20,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(" ");
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const wordElement = wordRefs.current[activeIndex];
    if (wordElement) {
      const rect = wordElement.getBoundingClientRect();
      const parentRect = wordElement.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setFocusRect({
          x: rect.left - parentRect.left,
          y: rect.top - parentRect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }
  }, [activeIndex, words.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, pauseBetweenAnimations * 1000);

    return () => clearInterval(interval);
  }, [pauseBetweenAnimations, words.length]);

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-[0.2em] font-extrabold text-[2rem] sm:text-[3rem] lg:text-[4rem] text-center leading-tight">
      {words.map((word, index) => {
        const isActive = index === activeIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative cursor-pointer transition-all duration-300 px-1"
            style={
              {
                "--main-color": mainColor,
                filter: isActive ? "none" : "blur(2px)",
                opacity: isActive ? 1 : 0.3,
                color: isActive ? mainColor : "#888",
              } as React.CSSProperties
            }
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: activeIndex >= 0 ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness,
          damping,
        }}
        style={
          {
            "--glow-color": glowColor,
            "--border-color": borderColor,
          } as React.CSSProperties
        }
      >
        <span className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-l-2" style={{ borderColor }}></span>
        <span className="absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-r-2" style={{ borderColor }}></span>
        <span className="absolute bottom-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-l-2" style={{ borderColor }}></span>
        <span className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-r-2" style={{ borderColor }}></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
