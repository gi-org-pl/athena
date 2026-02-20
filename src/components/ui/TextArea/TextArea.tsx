import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from "react";


const TextareaVariants = cva(
  "px-3 py-2 w-[346px] h-[122px] text-gi-primary rounded-3xl  h-30.5 ",
  {
    variants: {
      variant: {
        default: "text-gi-primary border-[1px] border-gi-primary/10                                         focus:ring-0 focus:outline-none",
        hover: "text-gi-primary border-[1px] border-gi-primary/10 hover:border-gi-primary/20                focus:ring-0 focus:outline-none",
        focus: "text-gi-primary border-[1px] border-gi-primary/10 hover:border-gi-primary/20 focus:border-[2px] focus:border-gi-primary/20 focus:ring-0 focus:outline-none",
        disabled: "text-gi-primary border-[1px] focus:ring-0 focus:outline-none",
        error: "text-gi-primary border-[1px] border-gi-red                                                  focus:ring-0 focus:outline-none",
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
  disabled: "text-gray-400"
};

function Textarea({
  className,
  variant,
  error,
  errorText,
  label,
  disabled,
  correctData,
  required,
  ...props
}: 

React.ComponentProps<"textarea"> & VariantProps<typeof TextareaVariants> & { required?: boolean; label?: boolean; error?: boolean; disabled?: boolean; errorText?: boolean; correctData?: boolean;}) {
  const [text, setText] = useState("");
  const maxLength = 500;

  return (
    <div>
     {label && <p className={cn("text-[16px]", labelVariants[variant ?? "default"])}>Label</p>}
     {required && <p className={cn("text-[16px] text-gi-primary")}>Label<span className="text-gi-red">*</span></p>}
    <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={500} data-slot="textarea" disabled={disabled} className={cn(TextareaVariants({ variant, className }))} {...props} />
     {error && <p className="text-gi-red text-[14px] h-4.25" >Error Message</p>}
     {errorText && <p className="text-gi-red text-[14px] h-4.25" >Text used to help user input correct data</p>}
     {correctData && <p className="text-gi-primary/50 text-[14px] h-4.25" >Text used to help user input correct data</p>}
      <p className="text-gi-primary/50  h-4.25 text-[14px]">{text.length}/{maxLength}</p>
    </div>
  );
}

export default function TextAreaWithCounter() {
  return <Textarea />;
}

export { Textarea };
