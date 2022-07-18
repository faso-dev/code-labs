import {AppContainer} from "../../layout/AppContainer";
import {Outlet} from "react-router-dom";
import {Page} from "../../layout/Page";
import {IAppRouteProps} from "../../types/props";

export const AppRoute = ({children}: IAppRouteProps) => {
    return children ?
        <AppContainer>
            <Page>
                {children}
            </Page>
        </AppContainer> :
        <Outlet/>
}