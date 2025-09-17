import { cn } from "@/dashboard/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { AlertErrorIcon, AlertSuccessIcon, AlertWarningIcon } from "./icons";

const alertVariants = cva(
  "flex gap-5 w-full rounded-[10px] border-l-6 px-7 py-8 dark:bg-opacity-30 md:p-9",
  {
    variants: {
      variant: {
        success: "border-success-500 bg-success-50 dark:bg-gray-800",
        warning: "border-warning-500 bg-warning-50 dark:bg-gray-800",
        error: "border-error-500 bg-error-50 dark:bg-gray-800",
      },
    },
    defaultVariants: {
      variant: "error",
    },
  },
);

const icons = {
  error: AlertErrorIcon,
  success: AlertSuccessIcon,
  warning: AlertWarningIcon,
};

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: "error" | "success" | "warning";
  title: string;
  description: string;
};

const Alert = ({
  className,
  variant,
  title,
  description,
  ...props
}: AlertProps) => {
  const IconComponent = icons[variant];

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <IconComponent />

      <div className="w-full">
        <h5
          className={cn("mb-4 font-bold leading-[22px]", {
            "text-success-800 dark:text-success-300": variant === "success",
            "text-warning-800": variant === "warning",
            "text-error-800": variant === "error",
          })}
        >
          {title}
        </h5>

        <div
          className={cn({
            "text-success-600": variant === "success",
            "text-warning-600": variant == "warning",
            "text-error-600": variant === "error",
          })}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export { Alert, type AlertProps };
