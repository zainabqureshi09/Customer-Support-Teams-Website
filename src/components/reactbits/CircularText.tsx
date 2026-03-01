import { motion } from "framer-motion";

interface CircularTextProps {
  text?: string;
  radius?: number;
  fontSize?: number;
  letterSpacing?: number;
  color?: string;
  className?: string;
  animate?: boolean;
  speed?: number;
}

const CircularText = ({
  text = "CONNECT • GLOBAL • PERFORMANCE • ",
  radius = 100,
  fontSize = 18,
  letterSpacing = 1,
  color = "white",
  className = "",
  animate = true,
  speed = 10,
}: CircularTextProps) => {
  const characters = text.split("");
  const degreeStep = 360 / characters.length;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <motion.div
        animate={animate ? { rotate: 360 } : {}}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full"
      >
        {characters.map((char, i) => {
          const rotation = i * degreeStep;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-0 origin-bottom flex justify-center"
              style={{
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                height: `${radius}px`,
                fontSize: `${fontSize}px`,
                letterSpacing: `${letterSpacing}px`,
                color: color,
                fontWeight: "bold",
                textTransform: "uppercase",
                transformOrigin: `50% ${radius}px`,
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;
