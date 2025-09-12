import { cva, VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 font-medium transition focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white",
        green: "bg-success-500 text-white",
        dark: "bg-gray-800 text-white dark:bg-white/10",
        outlinePrimary:
          "border border-primary-500 hover:bg-primary-500/10 text-primary-500",
        outlineGreen: "border border-success-500 hover:bg-success-500/10 text-success-500",
        outlineDark:
          "border border-gray-800 hover:bg-gray-800/10 text-gray-800 dark:hover:bg-white/10 dark:border-white/25 dark:text-white",
      },
      shape: {
        default: "",
        rounded: "rounded-[5px]",
        full: "rounded-full",
      },
      size: {
        default: "py-3.5 px-10 py-3.5 lg:px-8 xl:px-10",
        small: "py-[11px] px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "default",
      size: "default",
    },
  },
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    icon?: React.ReactNode;
  };

export function Button({
  label,
  icon,
  variant,
  shape,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, shape, size, className })}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
