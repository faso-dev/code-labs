import {ITextareaFieldProps} from "./types/props";
import './css/textarea.scss'
import {CSSProperties, forwardRef, LegacyRef} from "react";

export const TextareaField =
    forwardRef(({
                    radius,
                    maxwidth,
                    className,
                    style,
                    ...props
                }: ITextareaFieldProps, ref: LegacyRef<HTMLTextAreaElement> | undefined) => {
        return (
            <>
                <textarea
                    ref={ref}
                    className={className}
                    style={{
                        ...style,
                        '--radius': radius || 'none',
                        '--maxwidth': maxwidth || 'max-content'
                    } as CSSProperties}
                    {...props}></textarea>
            </>
        )
    })