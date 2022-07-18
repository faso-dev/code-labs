import {IIconProps} from "./types/props";

export const TrashIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width} height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={'none'}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 4H15M5 15H11C12.1046 15 13 14.1046 13 13V3C13 1.89543 12.1046 1 11 1H5C3.89543 1 3 1.89543 3 3V13C3 14.1046 3.89543 15 5 15Z"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>

        </>
    )
}