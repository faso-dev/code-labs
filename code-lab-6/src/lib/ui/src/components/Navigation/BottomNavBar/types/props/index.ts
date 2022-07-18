import {ReactNode} from "react";

export interface IBottomNavBarProps {
    children: ReactNode,
    maxwidth?: string
}

export interface IBottomNavBarItemProps {
    icon: ReactNode
    label: string
    path: string
}