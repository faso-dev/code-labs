import {TextareaHTMLAttributes} from "react";

export interface ITextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    radius?: string
    maxwidth?: string
}