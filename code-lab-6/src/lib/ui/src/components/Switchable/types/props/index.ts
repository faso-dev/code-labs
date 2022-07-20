import {InputHTMLAttributes} from "react";

export interface ISwitchableProps extends InputHTMLAttributes<HTMLInputElement> {
    switchedBackgroundColor?: string
    borderColor?: string
    backgroundColor?: string
    switchedBulletBackgroundColor?: string
    maxWidth?: string
}