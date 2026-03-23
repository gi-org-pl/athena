import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { JSX } from 'react/jsx-runtime';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';

export declare function Badge({ className, type, variant, size, children, LeftIcon, isDismissible, onDismiss, dataTestId, ...props }: BadgeProps): JSX.Element;

export declare interface BadgeProps extends Omit<React_2.ComponentProps<"span">, "children">, VariantProps<typeof badgeVariants> {
    children: React_2.ReactNode;
    LeftIcon?: React_2.ReactNode;
    isDismissible?: boolean;
    onDismiss?: () => void;
    dataTestId?: string;
}

export declare type BadgeType = "default" | "info" | "success" | "warning" | "error";

export declare const badgeVariants: (props?: ({
    type?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "primary" | "secondary" | "outlined" | "ghost" | null | undefined;
    size?: "small" | "regular" | "big" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends Omit<React_2.ButtonHTMLAttributes<HTMLButtonElement>, "type">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    LeftIcon?: React_2.ReactElement;
    RightIcon?: React_2.ReactElement;
    isLoading?: boolean;
    htmlType?: "button" | "submit" | "reset";
}

export declare const buttonVariants: (props?: ({
    type?: "primary" | "outlined" | "ghost" | null | undefined;
    variant?: "primary" | "secondary" | "danger" | null | undefined;
    size?: "small" | "regular" | null | undefined;
    isIconButton?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Checkbox({ className, label, secondaryLabel, id, ...props }: CheckboxProps): JSX.Element;

declare type CheckboxProps = React_2.ComponentProps<typeof CheckboxPrimitive.Root> & {
    label: string;
    secondaryLabel?: string;
};

export declare function InfoMessage({ className, variant, children, }: React_2.ComponentProps<"div"> & VariantProps<typeof infoMessageVariants>): JSX.Element;

export declare const infoMessageVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Modal({ title, description, children, actions, isOpen, isClosable, isCloseOnOverlayClick, onClose, className, dataTestId, ...rest }: ModalProps): JSX.Element | null;

declare interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    isOpen: boolean;
    isClosable?: boolean;
    isCloseOnOverlayClick?: boolean;
    onClose: () => void;
    dataTestId?: string;
}

export declare function ProgressBar({ className, value, size, variant, dataTestId, ...props }: ProgressBarProps): JSX.Element;

declare const progressBarFillVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface ProgressBarProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants>, VariantProps<typeof progressBarFillVariants> {
    value: number;
    dataTestId?: string;
}

declare const progressBarVariants: (props?: ({
    size?: "small" | "regular" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const RadioGroup: React_2.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare function RadioGroupItem({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Item>): JSX.Element;

export declare function Switch({ className, ...props }: React_2.ComponentProps<typeof SwitchPrimitive.Root>): JSX.Element;

export declare function TextArea({ className, isError, label, disabled, errorText, helper, isRequired, value, onChange, characterLimit, characterLimitVisibility, dataTestId, ...props }: TextAreaProps): JSX.Element;

declare interface TextAreaProps extends Omit<React.ComponentProps<"textarea">, "onChange"> {
    className?: string;
    value?: string;
    characterLimitVisibility?: boolean;
    characterLimit?: number;
    label?: string;
    disabled?: boolean;
    isRequired?: boolean;
    isError?: boolean;
    errorText?: string;
    helper?: React.ReactNode;
    onChange: (value: string) => void;
    placeholder?: string;
    dataTestId?: string;
}

export { }
