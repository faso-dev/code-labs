import {RoutesType} from "../types/route";
import {Home} from "../pages/Home";
import {CheckedIcon} from "../lib/ui/src/components/Icon/CheckedIcon";
import {CompletedTodo} from "../pages/CompletedTodo";
import {ListIcon} from "../lib/ui/src/components/Icon/ListIcon";
import {UnCompletedTodo} from "../pages/UnCompletedTodo";
import {AlertIcon} from "../lib/ui/src/components/Icon/AlertIcon";

export const Routes: RoutesType = {
    home: {
        path: '/',
        icon: <ListIcon color={'#0d6efd'}/>,
        component: <Home/>,
        title: 'Home'
    },
    completed: {
        path: '/completed',
        icon: <CheckedIcon color={'#0d6efd'}/>,
        component: <CompletedTodo/>,
        title: 'Done'
    },
    uncompleted: {
        path: '/uncompleted',
        icon: <AlertIcon color={'#0d6efd'}/>,
        component: <UnCompletedTodo/>,
        title: 'Progress'
    }
}