import {PlusIcon} from "../lib/ui/src/components/Icon/PlusIcon";
import {Button} from "../lib/ui/src/components/Button";
import {SearchField} from "../lib/ui/src/components/Field/SearchField/SearchField";
import {IPageProps} from "../types/props";
import {Navbar} from "../components/Navigation/Navbar";
import {TodoForm} from "../components/Todo/Crud/TodoForm/TodoForm";
import {useDispatch} from "react-redux";
import {openModal} from "../reducers/modal/actions";
import {AppDispatch} from "../types/todoStore";
import {useSearchParams} from "react-router-dom";
import {performSearch} from "../reducers/todo/actions";

export const Page = ({children}: IPageProps) => {

    const dispatch = useDispatch<AppDispatch>()

    const [params, setSearchParams] = useSearchParams();

    const updateQueryParam = (value: string) => {
        if (value.trim().length === 0) {
            if (params.has('q')) {
                params.delete('q');
                setSearchParams(params)
            }
        } else {
            setSearchParams({
                q: value
            })
            dispatch(performSearch(value))
        }
    }

    return (
        <>
            <div className="flex space-between gap-2">
                <SearchField
                    onSearch={() => dispatch(performSearch(params.get('q')))}
                    onType={value => updateQueryParam(value)}
                    iconColor={'#fff'}
                    iconWidth={'16'}
                    iconHeight={'16'}
                    radius={'12px 0 0 12px'}/>
                <Button
                    onClick={() => {
                        dispatch(openModal())
                    }}
                    radius={'12px'}
                    variant={'primary'}
                >
                    <PlusIcon
                        color={'#fff'}
                    />
                </Button>
            </div>
            <div className="content">
                {children}
            </div>
            <Navbar/>
            <TodoForm/>
        </>
    )
}