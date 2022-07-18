import {ITextFieldProps} from "./types/props";
import './css/input.scss'
import {CSSProperties} from "react";

export const TextField =
    ({
         radius,
         maxwidth,
         className,
         style,
         ...props
     }: ITextFieldProps) => {
        return (
            <>
                <input
                    className={className}
                    style={{
                        ...style,
                        '--radius': radius || 'none',
                        '--maxwidth': maxwidth || 'max-content'
                    } as CSSProperties}
                    {...props}/>
            </>
        )
    }