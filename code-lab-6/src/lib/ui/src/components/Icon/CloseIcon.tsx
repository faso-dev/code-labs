import {IIconProps} from "./types/props";

export const CloseIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 14L8 8M8 8L2 2M8 8L14 2M8 8L2 14" stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>

        </>
    )
}