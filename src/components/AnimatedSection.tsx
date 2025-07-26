"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fadeUp"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "fadeIn";
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getAnimationClass = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;

    if (!isVisible) {
      switch (animation) {
        case "fadeUp":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fadeDown":
          return `${baseClasses} opacity-0 -translate-y-8`;
        case "fadeLeft":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "fadeRight":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "scale":
          return `${baseClasses} opacity-0 scale-95`;
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
