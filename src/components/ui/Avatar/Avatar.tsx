import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, useEffect, useState } from "react";
import Female from "@/assets/icons/gi-female.svg";
import Male from "@/assets/icons/gi-male.svg";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full items-center justify-center bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-8 w-8 text-xs",
        medium: "h-10 w-10 text-sm",
        large: "h-14 w-14 text-base",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: "initials" | "icon";
  name?: string;
  gender?: "male" | "female";
  color?: string;
  dataTestId?: string;
}

const getInitials = (name: string) => {
  const cleanName = name.trim();
  if (!cleanName) return "";

  const parts = cleanName.split(/\s+/).filter(Boolean);
  const firstInitial = Array.from(parts[0])[0];
  const lastInitial =
    parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "";

  return (firstInitial + lastInitial).toUpperCase();
};

function Avatar({
  className,
  src,
  alt = "",
  size,
  fallback = "icon",
  name = "",
  gender = "male",
  color = "text-gi-light-primary",
  dataTestId,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const initials = fallback === "initials" ? getInitials(name) : "";
  const showImage = src && !hasError;
  const showInitials = !!initials;

  const hideFromScreenReaders = !name && !showImage;

  return (
    <div
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      data-test-id={dataTestId}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || name || ""}
          className="h-full w-full object-cover transition-opacity duration-300 ease"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center font-medium text-gi-primary"
          aria-label={name ? `${name} avatar` : undefined}
          aria-hidden={hideFromScreenReaders ? "true" : undefined}
        >
          {showInitials ? (
            initials
          ) : (
            <div className={cn("h-full w-full", color)}>
              {gender === "female" ? <Female /> : <Male />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { Avatar, avatarVariants };
