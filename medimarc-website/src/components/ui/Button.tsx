import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, to, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200",
      {
        primary:
          "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md",
        secondary:
          "bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
        ghost: "text-brand-600 hover:bg-brand-50",
      }[variant],
      {
        sm: "px-4 py-1.5 text-xs",
        md: "px-5 py-2 text-sm",
        lg: "px-7 py-3 text-base",
      }[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
