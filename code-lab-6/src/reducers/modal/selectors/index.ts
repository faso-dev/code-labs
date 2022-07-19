import {RootState} from "../../../types/todoStore";

export const modalStateSelector = (state: RootState) => state.modal.open