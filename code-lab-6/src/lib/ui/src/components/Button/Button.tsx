import {IButtonProps} from "./types/props";
import './css/button.scss'
import {CSSProperties} from "react";

export const Button =
    ({
         children,
         radius,
         variant,
         outlined,
         iconStart = null,
         iconEnd = null,
         shadow = '0 26px 40px rgba(0, 0, 0, 0.06)',
         className,
         style,
         ...props
     }: IButtonProps) => {
        return (
            <>
                <button
                    className={`${className} ${variant} ${outlined && 'outline'}`}
                    style={{
                        ...style,
                        '--radius': radius || 'none',
                        '--shadow': shadow || 'none',
                    } as CSSProperties}
                    {...props}>
                    <>
                        {iconStart && iconStart}
                        {children}
                        {iconEnd && iconEnd}
                    </>
                </button>
            </>
        )
    }