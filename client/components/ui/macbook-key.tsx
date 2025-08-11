import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MacBookKeyProps {
  icon?: LucideIcon;
  label?: string;
  tooltip?: string;
  onClick?: () => void;
  href?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "function" | "modifier" | "space" | "return";
  className?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const sizeStyles = {
  xs: "w-6 h-6 sm:w-8 sm:h-8 text-xs",
  sm: "w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm",
  md: "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-sm sm:text-base",
  lg: "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-base sm:text-lg",
  xl: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-lg sm:text-xl",
};

const variantStyles = {
  default: {
    surface: "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300",
    hoverSurface: "group-hover:from-gray-200 group-hover:via-gray-300 group-hover:to-gray-400",
    border: "border-gray-400/30",
    text: "text-gray-700",
    shadow: "bg-gray-600/30",
  },
  function: {
    surface: "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300",
    hoverSurface: "group-hover:from-blue-200 group-hover:via-blue-300 group-hover:to-blue-400",
    border: "border-blue-400/30",
    text: "text-blue-700",
    shadow: "bg-blue-600/30",
  },
  modifier: {
    surface: "bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300",
    hoverSurface: "group-hover:from-purple-200 group-hover:via-purple-300 group-hover:to-purple-400",
    border: "border-purple-400/30",
    text: "text-purple-700",
    shadow: "bg-purple-600/30",
  },
  space: {
    surface: "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300",
    hoverSurface: "group-hover:from-gray-200 group-hover:via-gray-300 group-hover:to-gray-400",
    border: "border-gray-400/30",
    text: "text-gray-700",
    shadow: "bg-gray-600/30",
  },
  return: {
    surface: "bg-gradient-to-b from-green-100 via-green-200 to-green-300",
    hoverSurface: "group-hover:from-green-200 group-hover:via-green-300 group-hover:to-green-400",
    border: "border-green-400/30",
    text: "text-green-700",
    shadow: "bg-green-600/30",
  },
};

export const MacBookKey: React.FC<MacBookKeyProps> = ({
  icon: Icon,
  label,
  tooltip,
  onClick,
  href,
  size = "md",
  variant = "default",
  className,
  children,
  target,
  rel,
  disabled = false,
}) => {
  const style = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  const keyContent = (
    <motion.div
      className={cn(
        "relative macbook-key-button group cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95, y: 1 } : {}}
      onClick={disabled ? undefined : onClick}
    >
      {/* MacBook key top surface */}
      <div
        className={cn(
          "relative rounded-lg shadow-lg border flex items-center justify-center transform transition-all duration-200 group-active:scale-95",
          sizeClass,
          style.surface,
          style.hoverSurface,
          style.border,
          !disabled && "group-hover:shadow-xl"
        )}
      >
        {/* Key highlight - glossy effect */}
        <div className="absolute inset-0.5 bg-gradient-to-b from-white/60 via-white/30 to-transparent rounded-md opacity-80 pointer-events-none"></div>

        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-lg pointer-events-none"></div>

        {/* Content */}
        <div className={cn("relative z-10 drop-shadow-sm flex items-center justify-center", style.text)}>
          {Icon && (
            <Icon
              className={cn(
                "drop-shadow-sm",
                size === "xs" && "w-2.5 h-2.5 sm:w-3 sm:h-3",
                size === "sm" && "w-3 h-3 sm:w-4 sm:h-4",
                size === "md" && "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6",
                size === "lg" && "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7",
                size === "xl" && "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
              )}
            />
          )}
          {label && !Icon && (
            <span className={cn(
              "font-mono font-medium",
              size === "xs" && "text-xs",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-lg",
              size === "xl" && "text-xl"
            )}>
              {label}
            </span>
          )}
          {children}
        </div>

        {/* Key press shadow overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-100 pointer-events-none"></div>

        {/* Enhanced border glow on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-white/20"></div>
      </div>

      {/* MacBook key base/shadow - creates the 3D depth effect */}
      <div 
        className={cn(
          "absolute top-1 left-0 w-full h-full rounded-lg -z-10 group-active:top-0.5 transition-all duration-100",
          style.shadow
        )}
      ></div>

      {/* Key label tooltip */}
      {tooltip && (
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
          <div className="bg-gray-900/95 text-white px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap border border-gray-700 shadow-lg backdrop-blur-sm">
            {tooltip}
            {/* Tooltip arrow */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-gray-700 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Subtle reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {keyContent}
      </a>
    );
  }

  return keyContent;
};

// Specific variants for common MacBook keys
export const MacBookFunctionKey: React.FC<Omit<MacBookKeyProps, 'variant'>> = (props) => (
  <MacBookKey {...props} variant="function" />
);

export const MacBookModifierKey: React.FC<Omit<MacBookKeyProps, 'variant'>> = (props) => (
  <MacBookKey {...props} variant="modifier" />
);

export const MacBookSpaceKey: React.FC<Omit<MacBookKeyProps, 'variant' | 'size'>> = (props) => (
  <MacBookKey {...props} variant="space" size="xl" className="w-32 h-12" />
);

export const MacBookReturnKey: React.FC<Omit<MacBookKeyProps, 'variant'>> = (props) => (
  <MacBookKey {...props} variant="return" />
);

// Keyboard row component for organizing keys
export const MacBookKeyboardRow: React.FC<{
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}> = ({ children, className, gap = "md" }) => {
  const gapStyles = {
    sm: "gap-1 sm:gap-2",
    md: "gap-2 sm:gap-3 lg:gap-4",
    lg: "gap-3 sm:gap-4 lg:gap-6",
  };

  return (
    <div className={cn("flex items-center justify-center", gapStyles[gap], className)}>
      {children}
    </div>
  );
};

export default MacBookKey;
