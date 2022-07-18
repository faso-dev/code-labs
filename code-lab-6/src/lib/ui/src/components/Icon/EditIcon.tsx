import {IIconProps} from "./types/props";

export const EditIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill={color}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 4L1 12V15H4L12 7M9 4L11.2929 1.70711C11.6834 1.31658 12.3166 1.31658 12.7071 1.70711L14.2929 3.29289C14.6834 3.68342 14.6834 4.31658 14.2929 4.70711L12 7M9 4L12 7"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>
        </>
    )
}