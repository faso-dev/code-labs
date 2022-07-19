import {Routes} from "../../config";
import {BottomNavBar, BottomNavBarItem} from "../../lib/ui/src/components/Navigation/BottomNavBar";

export const Navbar = () => {
    return (
        <>
            <BottomNavBar>
                {Object.entries(Routes).map(([_, route], index) => (
                    <BottomNavBarItem
                        key={route.path}
                        icon={route.icon}
                        label={route.title}
                        path={route.path}
                    />
                ))}
            </BottomNavBar>
        </>
    )
}