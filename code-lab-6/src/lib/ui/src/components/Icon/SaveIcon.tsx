import {IIconProps} from "./types/props";

export const SaveIcon = ({color, width = '16', height = '16'}: IIconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${(Number.parseInt(width, 10) * 2)} ${Number.parseInt(height, 10) * 2}`}
                fill={'none'}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.42 10.005L21.9925 4.57875C21.6175 4.205 21.12 4 20.595 4H6C4.8975 4 4 4.8975 4 6V26C4 27.1025 4.8975 28 6 28H26C27.1025 28 28 27.1025 28 26V11.4138C28.0012 10.89 27.79 10.3775 27.42 10.005ZM21 26H11V19H21V26ZM26 26H23V19C23 17.8975 22.1025 17 21 17H11C9.8975 17 9 17.8975 9 19V26H6V6L20.58 5.995L26 11.415V26.0012V26Z"
                    fill={color}/>
                <path
                    d="M19 8H12C11.4475 8 11 8.4475 11 9C11 9.5525 11.4475 10 12 10H19C19.5525 10 20 9.5525 20 9C20 8.4475 19.5525 8 19 8Z"
                    fill={color}/>

            </svg>
        </>
    )
}