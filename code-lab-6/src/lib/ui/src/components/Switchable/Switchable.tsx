import {ISwitchableProps} from "./types/props";
import {CSSProperties} from "react";

export const Switchable =
    ({
         switchedBackgroundColor,
         borderColor,
         backgroundColor,
         switchedBulletBackgroundColor,
         className,
         maxWidth,
         ...props
     }: ISwitchableProps) => {
        return (
            <>
                <div style={{
                    '--switched-color': switchedBackgroundColor || '#0d6efd',
                    '--switched-bullet-color': switchedBulletBackgroundColor || '#fff',
                    '--background-color': backgroundColor || 'transparent',
                    '--border-color': switchedBackgroundColor || '#0d6efd',
                    '--max-width': maxWidth || '60px',
                    '--max-width-value': maxWidth?.replace('px', '') || '60',
                } as CSSProperties}>
                    <input
                        id='switchable'
                        {...props}
                        className={`${className} switchable`}
                        type="checkbox"/>
                    <label htmlFor="switchable"></label>
                </div>
            </>
        )
    }