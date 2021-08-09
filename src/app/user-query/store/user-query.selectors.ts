import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserQueryState } from "./user-query.states";

const userQuery = createFeatureSelector<UserQueryState>('userQuery');
const userLoaded = createSelector(userQuery, (state) => state.userLoaded);

export const UserQuerySelectors = {
    userQuery, userLoaded
};