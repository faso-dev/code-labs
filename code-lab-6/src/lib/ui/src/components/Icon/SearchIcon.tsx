import {IIconProps} from "./types/props";

export const SearchIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={'none'}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 14L10.569 10.5296M7 12C5 12 2 10.5 2 7C2 3.5 5 2 7 2C9 2 12 3.5 12 7C12 10.5 9 12 7 12Z"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>
        </>
    )
}