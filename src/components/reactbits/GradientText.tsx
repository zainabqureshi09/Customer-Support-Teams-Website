import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText = ({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) => {
  const gradient = colors.join(", ");

  return (
    <div
      className={cn(
        "relative flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden",
        className
      )}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradient})`,
            backgroundSize: "300% 100%",
            animationDuration: `${animationSpeed}s`,
          }}
        >
          <div className="absolute inset-[1px] rounded-[1.25rem] bg-black z-[-1]" />
        </div>
      )}
      <div
        className="relative z-2 inline-block bg-clip-text text-transparent animate-gradient"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradient})`,
          backgroundSize: "300% 100%",
          animationDuration: `${animationSpeed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText;
