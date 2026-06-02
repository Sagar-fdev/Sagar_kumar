import { cn } from "@/lib/utils";

const variants = {
  default: "bg-primary text-primary-foreground shadow hover:opacity-90",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  outline: "border border-input bg-background shadow-sm hover:bg-accent",
};
const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

export function Button({
  variant = "default",
  size = "default",
  className = "",
  asChild = false,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const classes = cn(base, variants[variant], sizes[size], className);
  if (asChild) {
    // expects single child element; clone with merged className
    const child = Array.isArray(children) ? children[0] : children;
    return {
      ...child,
      props: { ...child.props, className: cn(classes, child.props.className) },
    };
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
