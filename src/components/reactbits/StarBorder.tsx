import React from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className,
  color = "white",
  speed = "6s",
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative inline-block py-[1px] px-[1px] overflow-hidden rounded-[20px]",
        className
      )}
      {...props}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite`,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite`,
        }}
      ></div>
      <div className="relative z-1 bg-black text-white rounded-[20px] text-center h-full w-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
