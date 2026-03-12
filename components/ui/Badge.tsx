interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "sandstone" | "outline";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-brown/10 text-brown-light",
  gold: "bg-gold/20 text-gold-dark",
  sandstone: "bg-sandstone/20 text-sandstone",
  outline: "border border-sandstone/40 text-sandstone",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
}
