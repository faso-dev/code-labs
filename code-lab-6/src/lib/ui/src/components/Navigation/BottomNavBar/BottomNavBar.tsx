import {IBottomNavBarProps} from "./types/props";
import {CSSProperties} from "react";

export const BottomNavBar = ({children, maxwidth}: IBottomNavBarProps) => {
    return (
        <>
            <div className="nav-tab">
                <ul
                    style={{
                        '--maxwidth': maxwidth || '400px'
                    } as CSSProperties}
                    className="items">
                    {children}
                </ul>
            </div>
        </>
    )
}