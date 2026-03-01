import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileConfirmation?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const TiltedCard = ({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 12,
  showMobileConfirmation = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 2;
    const yPct = (mouseYPos / height - 0.5) * 2;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-1, 1], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(mouseX, [-1, 1], [-rotateAmplitude, rotateAmplitude]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full [perspective:1000px] flex items-center justify-center"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          rotateX,
          rotateY,
          width: imageWidth,
          height: imageHeight,
        }}
        whileHover={{ scale: scaleOnHover }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover rounded-[15px] shadow-2xl"
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 z-10 [transform:translateZ(30px)]">
            {overlayContent}
          </div>
        )}

        {showTooltip && captionText && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg text-sm text-center opacity-0 [transform:translateZ(50px)]"
            whileHover={{ opacity: 1 }}
          >
            {captionText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
