import {HIDEN_MODAL, SHOW_MODAL} from "../../../constants";


export const openModal = () => ({
    type: SHOW_MODAL
})

export const hideModal = () => ({
    type: HIDEN_MODAL,
})
