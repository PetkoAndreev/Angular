import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { ILoginPageState, IProfilePageState } from ".";
import { IUser } from "../core/interfaces";
import { decrement, enterEditMode, exitEditMode, increment, initializeLoginState, login, loginProcessError, logout, profileLoaded, profileLoadError, reset, startLoginProcess } from "./actions";

export const counterReducer = createReducer<number>(0,
    on(increment, (state) => state + 1),
    on(decrement, state => state - 1),
    on(reset, () => 0),
);

export const currentUserReducer = createReducer<IUser>(
    undefined!,
    on(login, (_, action) => action.user),
    on(logout, () => undefined!)
)

export const profileReducer = createReducer<IProfilePageState>(
    {
        currentProfile: undefined!,
        isInEditMode: false,
        errorHappened: false,
    },
    on(profileLoaded, (state, action) => {
        return {
            ...state,
            currentProfile: action.profile,
        }
    }),
    on(enterEditMode, (state) => {
        return {
            ...state,
            isInEditMode: true,
        }
    }),
    on(exitEditMode, (state) => {
        return {
            ...state,
            isInEditMode: false,
        }
    }),
    on(profileLoadError, (state) => {
        return {
            ...state,
            errorHappened: true,
        }
    })
)

const loginInitialState = {
    errorMessage: '',
    isLoginPending: false,
}
export const loginReducer = createReducer<ILoginPageState>(
    loginInitialState,
    on(startLoginProcess, (state) => {
        return {
            ...state, // It's good to have it here, because if we add new property in the index interface witout this property will get error
            isLoginPending: true,
            errorMessage: '',
        }
    }),
    on(loginProcessError, (state, action) => {
        return {
            ...state,
            isLoginPending: false,
            errorMessage: action.errorMessage,
        }
    }),
    on(initializeLoginState, () => {
        return loginInitialState
    })
)