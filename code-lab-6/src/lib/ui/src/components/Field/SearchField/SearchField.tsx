import {TextField} from "../TextField/TextField";
import {SearchIcon} from "../../Icon/SearchIcon";
import {SearchFieldProps} from "./types/props";
import './css/flex.scss'
import {Button} from "../../Button";

export const SearchField =
    ({
         iconColor,
         iconWidth,
         iconHeight,
         buttonVariant = 'primary',
         buttonOutlined = false,
         buttonRadius = '0 12px 12px 0',
         radius = 'none'
     }: SearchFieldProps) => {
        return (
            <>
                <div className="flex items-center">
                    <TextField
                        placeholder={'Rechercher...'}
                        radius={radius}
                        type='text'/>
                    <Button
                        outlined={buttonOutlined}
                        radius={buttonRadius}
                        variant={buttonVariant}>
                        <SearchIcon color={iconColor} width={iconWidth} height={iconHeight}/>
                    </Button>
                </div>
            </>
        )
    }