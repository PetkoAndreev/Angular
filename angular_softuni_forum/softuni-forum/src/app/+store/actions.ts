import { createAction, props } from "@ngrx/store";
import { IUser } from "../core/interfaces";

const myCounterDomain = '[MyCounterComponent]'
export const increment = createAction(`${myCounterDomain} Increment`);
export const decrement = createAction(`${myCounterDomain} Decrement`);
export const reset = createAction(`${myCounterDomain} Reset`);

const currentUserDomain = '[CurrentUser]'
export const login = createAction(`${currentUserDomain} Login`, props<{ user: IUser }>());
export const logout = createAction(`${currentUserDomain} Logout`);

const profileDomain = '[ProfileComponent]'
export const profileLoaded = createAction(`${profileDomain} Profile Loaded`, props<{ profile: IUser }>())
export const enterEditMode = createAction(`${profileDomain} Enter Edit Mode`);
export const exitEditMode = createAction(`${profileDomain} Exit Edit Mode`);
export const profilePageInitialized = createAction(`${profileDomain} Profile Initialized`);
export const profileLoadError = createAction(`${profileDomain} Profile Error`)

const loginDomain = '[LoginComponent]';
export const startLoginProcess = createAction(`${loginDomain} Start Login`);
export const endLoginProcess = createAction(`${loginDomain} End Login`);
export const loginProcessError = createAction(`${loginDomain} Login Error`, props<{ errorMessage: string }>());
export const initializeLoginState = createAction(`${loginDomain} Login Initialize`);
