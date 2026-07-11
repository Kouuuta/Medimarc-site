import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { buttonTap, buttonHover } from "../../lib/animations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 no-underline cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-accent text-white hover:bg-accent-dark",
    ghost: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={buttonHover}
        whileTap={buttonTap}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={buttonHover}
      whileTap={buttonTap}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
