import {InputHTMLAttributes, Ref} from "react";

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  radius? : string
  maxwidth? : string
}