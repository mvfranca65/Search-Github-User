import { createAction, props } from "@ngrx/store";

const loadUser = createAction('[Profile Component] load user', props<{ user: string }>());
const loadedUser = createAction('[Profile Component] loaded user', props<{ userLoaded: any }>());

export const UserQueryActions = {
    loadUser,
    loadedUser
}