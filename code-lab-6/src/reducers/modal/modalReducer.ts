import {HIDEN_MODAL, SHOW_MODAL} from "../../constants";
import {IModalAction, IModalState} from "../../types/modalState";


export const initialModalState: IModalState = {
    open: false
}

const ModalReducer = (state = initialModalState, action: IModalAction<string, any>) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {open: true}
        case HIDEN_MODAL:
            return {open: false}
        default :
            return {open: false}
    }
}

export default ModalReducer