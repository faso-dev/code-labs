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
         onSearch,
         onType,
         buttonVariant = 'primary',
         buttonOutlined = false,
         buttonRadius = '0 12px 12px 0',
         radius = 'none'
     }: SearchFieldProps) => {
        return (
            <>
                <div className="flex items-center">
                    <TextField
                        onKeyUp={e => onType(e.currentTarget.value)}
                        placeholder={'Rechercher...'}
                        radius={radius}
                        type='text'/>
                    <Button
                        onClick={onSearch}
                        outlined={buttonOutlined}
                        radius={buttonRadius}
                        variant={buttonVariant}>
                        <SearchIcon color={iconColor} width={iconWidth} height={iconHeight}/>
                    </Button>
                </div>
            </>
        )
    }