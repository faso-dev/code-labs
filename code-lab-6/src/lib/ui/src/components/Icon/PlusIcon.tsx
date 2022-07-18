import {IIconProps} from "./types/props";

export const PlusIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14V8M8 8V2M8 8L14 8M8 8H2"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"/>
            </svg>

        </>
    )
}