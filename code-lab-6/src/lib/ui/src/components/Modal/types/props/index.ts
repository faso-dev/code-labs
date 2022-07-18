import {ReactNode} from "react";

export interface IModalProps {
    children: ReactNode
    open: boolean
    title: string
    titleColor?: string
    background?: string
    shadow?: string
    radius?: string
    onClose: (...args: any) => void
    beforeOnClose?: (...args: any) => void
    beforeOnOpen?: (...args: any) => void
}