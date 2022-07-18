import {ReactElement} from "react";

export type RouteType = {
    path: string,
    icon: ReactElement,
    component: ReactElement,
    title: string
}


export type RoutesType = {
    [key in "home"
        | "completed"
        | "uncompleted"]: RouteType;
};