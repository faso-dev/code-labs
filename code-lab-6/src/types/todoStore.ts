import store from "../store/todo";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch