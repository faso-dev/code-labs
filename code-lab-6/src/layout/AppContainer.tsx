import {IAppContainerProps} from "../types/props";

export const AppContainer = ({children} : IAppContainerProps) => {
    return (
        <>
            <div className="container mt-2">
                {children}
            </div>
        </>
    )
}