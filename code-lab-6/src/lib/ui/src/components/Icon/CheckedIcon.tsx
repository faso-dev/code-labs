import {IIconProps} from "./types/props";

export const CheckedIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width} height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5 5.5L8.32842 11.6716C6.99509 13.0049 6.32843 13.6716 5.5 13.6716C4.67157 13.6716 4.00491 13.0049 2.67157 11.6716L1 10"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>

        </>
    )
}