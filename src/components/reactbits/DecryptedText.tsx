import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
  [key: string]: unknown;
}

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleAnimate = useCallback(() => {
    if (isRevealing) return;
    setIsRevealing(true);
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText((prevText) =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (iteration >= maxIterations) return text[index];
            if (sequential && iteration > index) return text[index];

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration++;

      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRevealing(false);
      }
    }, speed);
  }, [text, characters, maxIterations, sequential, speed, isRevealing]);

  useEffect(() => {
    if (animateOn === 'view') {
        handleAnimate();
    }
  }, [animateOn, handleAnimate]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      className={parentClassName}
      onMouseEnter={() => {
        setIsHovering(true);
        if (animateOn === 'hover') handleAnimate();
      }}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </motion.span>
  );
};

export default DecryptedText;
