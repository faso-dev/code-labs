import {IIconProps} from "./types/props";

export const HomeIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width} height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 5.57143V12C3 13.1046 3.89543 14 5 14H11C12.1046 14 13 13.1046 13 12V5.57143M3 5.57143L1 7M3 5.57143L8 2L13 5.57143M13 5.57143L15 7"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>

        </>
    )
}