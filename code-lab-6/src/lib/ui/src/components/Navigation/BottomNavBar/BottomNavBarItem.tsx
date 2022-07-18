import {IBottomNavBarItemProps} from "./types/props";
import {NavLink} from "react-router-dom";

export const BottomNavBarItem = ({path, icon, label}: IBottomNavBarItemProps) => {
    return (
        <>
            <li className="items__item">
                <NavLink
                    to={path}
                    className="items__item_link">
                    {icon}
                    <span>{label}</span>
                </NavLink>
            </li>
        </>
    )
}