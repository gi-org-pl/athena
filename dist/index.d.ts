import { ButtonHTMLAttributes } from 'react';
import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { Root } from '@radix-ui/react-checkbox';
import { SwitchProps } from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';

declare interface ActionItem {
    label: React.ReactNode;
    icon?: React.ReactElement;
    onClick?: () => void;
    variant?: "default" | "danger";
}

export declare const ActionList: ForwardRefExoticComponent<ActionListProps & RefAttributes<HTMLDivElement>>;

declare interface ActionListProps {
    items: ActionItem[];
    className?: string;
}

export declare const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLDivElement>>;

declare interface AvatarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: "initials" | "icon";
    name?: string;
    gender?: "male" | "female";
    color?: string;
    dataTestId?: string;
}

declare const avatarVariants: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Badge: ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & RefAttributes<HTMLSpanElement>>;

declare interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {
    LeftIcon?: ReactNode;
    isDismissible?: boolean;
    onDismiss?: () => void;
    dataTestId?: string;
}

declare const badgeVariants: (props?: ({
    type?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
    variant?: "primary" | "secondary" | "outlined" | "ghost" | null | undefined;
    size?: "small" | "big" | "regular" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    LeftIcon?: ReactElement;
    RightIcon?: ReactElement;
    isLoading?: boolean;
    htmlType?: "button" | "submit" | "reset";
}

export declare const Button: ForwardRefExoticComponent<BaseButtonProps & {
"aria-label"?: string;
isIconButton?: boolean;
} & RefAttributes<HTMLButtonElement>>;

declare interface ButtonOption {
    id: string;
    text: string;
}

export declare const ButtonSelect: {
    ({ options, selectedOptionId, isFullWidth, onSelectedOptionIdChange, className, ...props }: ButtonSelectProps): JSX.Element | null;
    displayName: string;
};

declare interface ButtonSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    options: ButtonOption[];
    isFullWidth?: boolean;
    selectedOptionId: string;
    onSelectedOptionIdChange: (id: string) => void;
}

declare const buttonVariants: (props?: ({
    type?: "primary" | "outlined" | "ghost" | null | undefined;
    variant?: "primary" | "secondary" | "danger" | null | undefined;
    size?: "small" | "regular" | null | undefined;
    isIconButton?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Checkbox: {
    ({ className, label, secondaryLabel, id, ...props }: CheckboxProps): JSX.Element;
    displayName: string;
};

declare type CheckboxProps = ComponentProps<typeof Root> & {
    label: string;
    secondaryLabel?: string;
};

export declare const InfoMessage: ForwardRefExoticComponent<Omit<InfoMessageProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface InfoMessageProps extends React.ComponentProps<"div">, VariantProps<typeof infoMessageVariants> {
    children: ReactNode;
    LeftIcon?: ReactNode;
}

declare const infoMessageVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "prefix"> {
    dataTestId?: string;
    label?: string;
    helper?: ReactNode;
    errorText?: string;
    isError?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    LeftIcon?: ReactNode;
    RightIcon?: ReactNode;
    prefix?: string;
    suffix?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

declare interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    actions?: ReactNode;
    isOpen: boolean;
    isClosable?: boolean;
    isCloseOnOverlayClick?: boolean;
    onClose: () => void;
    dataTestId?: string;
}

export declare const Pagination: ForwardRefExoticComponent<PaginationProps & RefAttributes<HTMLElement>>;

declare interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
    isOnlyActions?: boolean;
    isFullWidth?: boolean;
    siblingCount?: number;
    dataTestId?: string;
}

export declare const ProgressBar: ForwardRefExoticComponent<ProgressBarProps & RefAttributes<HTMLDivElement>>;

declare const progressBarFillVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface ProgressBarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants>, VariantProps<typeof progressBarFillVariants> {
    value: number;
    dataTestId?: string;
}

declare const progressBarVariants: (props?: ({
    size?: "small" | "regular" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const RadioGroup: ForwardRefExoticComponent<Omit<RadioGroupProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const RadioGroupItem: ForwardRefExoticComponent<Omit<RadioGroupItemProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const Section: ForwardRefExoticComponent<SectionProps & RefAttributes<HTMLElement>>;

declare type SectionActionsPosition = "right" | "bottom";

declare interface SectionProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    actions?: ReactNode;
    actionsPosition?: SectionActionsPosition;
    children: ReactNode;
    dataTestId?: string;
}

export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLDivElement>>;

declare interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    value?: React.ReactNode;
    placeholder?: string;
    size?: "regular" | "small";
    openOn?: "click" | "hover";
    children: React.ReactNode;
    isDisabled?: boolean;
    dataTestId?: string;
    trigger?: React.ReactNode;
}

export declare const Switch: ForwardRefExoticComponent<Omit<SwitchProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

declare interface TabItem {
    label: ReactNode;
    value: string;
}

export declare function Table<T>({ columns, data, getRowKey, isSelectable, selectedRowKeys, onSelectedRowKeysChange, actions, pagination, emptyState, isMobileScrollable, dataTestId, className, ...props }: TableProps<T>): JSX.Element;

declare const tableCellVariants: (props?: ({
    align?: "center" | "right" | "left" | null | undefined;
    variant?: "body" | "header" | null | undefined;
    mobileFullWidth?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare interface TableColumn<T> {
    key: string;
    header: React_2.ReactNode;
    render?: (row: T) => React_2.ReactNode;
    width?: string | number;
    align?: VariantProps<typeof tableCellVariants>["align"];
}

declare const tableContainerVariants: (props?: ({
    isMobileScrollable?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare interface TablePagination {
    page: number;
    totalPages: number;
    totalElements: number;
    onChange: (page: number) => void;
}

declare interface TableProps<T> extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tableContainerVariants> {
    columns: TableColumn<T>[];
    data: T[];
    getRowKey: (row: T) => string;
    isSelectable?: boolean;
    selectedRowKeys?: string[];
    onSelectedRowKeysChange?: (keys: string[]) => void;
    actions?: (row: T) => React_2.ReactNode;
    pagination?: TablePagination;
    emptyState?: React_2.ReactNode;
    dataTestId?: string;
}

export declare const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>;

declare interface TabsProps extends ComponentPropsWithoutRef<"div"> {
    value: string;
    onValueChange: (value: string) => void;
    items: Array<TabItem>;
    size?: "regular" | "large";
    isFullWidth?: boolean;
    dataTestId?: string;
}

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
