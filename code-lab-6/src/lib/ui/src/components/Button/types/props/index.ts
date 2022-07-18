import {ButtonHTMLAttributes, ReactElement} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: string
    shadow?: string
    radius?: string
    outlined?: boolean
    iconStart?: ReactElement|null
    iconEnd?: ReactElement|null
}