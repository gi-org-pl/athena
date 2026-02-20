import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TextareaVariants = cva(
  "px-3 py-2 w-[346px] h-[122px] text-gi-primary rounded-3xl  h-30.5 ",
  {
    variants: {
      variant: {
        default:
          "text-gi-primary border-[1px] border-gi-primary/10                                         focus:ring-0 focus:outline-none",
        hover:
          "text-gi-primary border-[1px] border-gi-primary/10 hover:border-gi-primary/20                focus:ring-0 focus:outline-none",
        focus:
          "text-gi-primary border-[1px] border-gi-primary/10 hover:border-gi-primary/20 focus:border-gi-primary/20 focus:ring-0 focus:outline-1",
        disabled:
          "text-gi-primary border-[1px] focus:ring-0 focus:outline-none cursor-not-allowed",
        error:
          "text-gi-primary border-[1px] border-gi-red                            focus:ring-0 focus:outline-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const labelVariants: Record<string, string> = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gray-400",
};

function Textarea({
  className,
  variant,
  isError,
  label,
  isDisabled,
  helper,
  isRequired,
  value,
  onChange,
  characterLimit,
  characterLimitVisibility,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof TextareaVariants> & {
    characterLimitVisibility?: boolean;  
    characterLimit?: number;
    label?: string;
    isRequired?: boolean;
    isError?: string;
    helper?: string;
    isDisabled?: boolean;
  }) {
  const [text, setText] = useState("");
  const currentLength = (value !== undefined ? String(value) : text).length;
  const maxLength = characterLimit;
  const footerText = isError ? isError : isError || helper ? helper : '';
  const isRed = Boolean(isError);


  return (
    <div>
      <p className={cn("text-[16px]", labelVariants[variant ?? "default"])}>{label}{isRequired &&<span className="text-red-500 ml-1 size-4">*</span>} </p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={maxLength} data-slot="textarea" disabled={isDisabled} className={cn(TextareaVariants({ variant, className }))}{...props}/>
      <div className="flex justify-between items-start text-[14px] h-4.25">
        <p className={cn(isRed ? "text-gi-red text-[14px]" : "text-gi-primary/50 text-[14px]")}>{footerText}</p>
        { characterLimitVisibility && <p className="text-gi-primary/50  h-4.25 text-[14px] flex justify-end">{currentLength}/{maxLength}</p>}
      </div>
    </div>
  );
}

export default function TextAreaWithCounter() {
  return <Textarea />;
}

export { Textarea };
