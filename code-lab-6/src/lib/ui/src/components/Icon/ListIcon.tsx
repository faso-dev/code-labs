import {IIconProps} from "./types/props";

export const ListIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 8H15M7 14H15M7 2H15M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2ZM1 14C1 14.5523 1.44772 15 2 15C2.55228 15 3 14.5523 3 14C3 13.4477 2.55228 13 2 13C1.44772 13 1 13.4477 1 14ZM1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7C1.44772 7 1 7.44772 1 8Z"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>

        </>
    )
}