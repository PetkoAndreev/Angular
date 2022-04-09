import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from ".";
import { IUser } from "../core/interfaces";

export const authSelector = createFeatureSelector<IAuthState>('auth');
export const currentUserSelector = createFeatureSelector<IUser>('currentUser');

export const loginErrorMessageSelector = createSelector(authSelector, (authState) => {
    return authState.login.errorMessage;
});

export const loginIsLoginPendingSelector = createSelector(
    authSelector,
    currentUserSelector,
    (authState: IAuthState, currentUser: IUser) => {
        return authState.login.isLoginPending && !!currentUser;
    });

