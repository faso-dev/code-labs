export interface IModalState {
    open : boolean
}

export interface IModalAction<T, P> {
    readonly type: T;
    readonly payload?: P;
}

