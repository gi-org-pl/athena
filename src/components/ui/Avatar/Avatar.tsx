import { useEffect, useState, forwardRef } from "react";
import { type AvatarProps, avatarVariants } from "./Avatar.types";
import { getInitials } from "./Avatar.methods";
import Female from "@/assets/icons/gi-female.svg";
import Male from "@/assets/icons/gi-male.svg";
import { cn } from "@/lib/utils";

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
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
    },
    ref,
  ) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      if (hasError) setHasError(false);
    }, [src]);

    const initials = fallback === "initials" ? getInitials(name) : "";
    const showImage = !!src && !hasError;
    const showInitials = !!initials;
    const hasIdentifier = !!(name || alt);
    const label = hasIdentifier ? (name ? `${name} avatar` : alt) : undefined;
    const role = hasIdentifier ? "img" : undefined;

    return (
      <div
        ref={ref}
        role={role}
        aria-label={label}
        data-slot="avatar"
        data-test-id={dataTestId}
        className={cn(avatarVariants({ size, className }))}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt="" 
            className="size-full object-cover transition-opacity duration-300 ease"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="flex size-full items-center justify-center font-medium text-gi-primary"
            aria-hidden="true"
          >
            {showInitials ? (
              initials
            ) : (
              <span className={cn("size-full", color)}>
                {gender === "female" ? <Female /> : <Male />}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };