import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer stylized globe/connection ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 5"
        className="opacity-20"
      />
      
      {/* Connected nodes path */}
      <path
        d="M25 50 L40 35 L60 65 L75 50"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      
      {/* Core central node */}
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="currentColor"
        className="text-primary animate-pulse"
      />
      
      {/* Orbiting accents */}
      <circle cx="25" cy="50" r="4" fill="currentColor" className="text-primary/40" />
      <circle cx="75" cy="50" r="4" fill="currentColor" className="text-primary/40" />
    </svg>
  );
};

export default Logo;
