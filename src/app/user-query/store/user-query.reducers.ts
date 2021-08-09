import { createReducer, on } from "@ngrx/store";
import { UserQueryActions } from "./user-query.actions";
import { UserQueryState } from "./user-query.states";

const initialState: UserQueryState = {
    userLoaded: null
};

const userQueryReducers = createReducer(initialState,
    on(UserQueryActions.loadedUser, (state, { userLoaded }) => ({ ...state, userLoaded })),
);

export function UserQueryReducers(state: any, action: any) {
    return userQueryReducers(state, action);
} 