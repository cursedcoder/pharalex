interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = {
  none: "",
  sm: "p-3",
  md: "p-4 sm:p-6",
  lg: "p-6 sm:p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        bg-ivory-dark/50 dark:bg-ivory-dark
        border border-sandstone/20
        rounded-lg shadow-sm
        ${hover ? "hover:shadow-md hover:border-gold/40 cursor-pointer" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
