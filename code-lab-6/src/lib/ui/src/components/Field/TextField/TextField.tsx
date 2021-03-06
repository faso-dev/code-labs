import {ITextFieldProps} from "./types/props";
import './css/input.scss'
import {CSSProperties, forwardRef, LegacyRef} from "react";

export const TextField =
    forwardRef(({
                    radius,
                    maxwidth,
                    className,
                    style,
                    ...props
                }: ITextFieldProps, ref: LegacyRef<HTMLInputElement> | undefined) => {
        return (
            <>
                <input
                    ref={ref}
                    className={className}
                    style={{
                        ...style,
                        '--radius': radius || 'none',
                        '--maxwidth': maxwidth || 'max-content'
                    } as CSSProperties}
                    {...props}/>
            </>
        )
    })