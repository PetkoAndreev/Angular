import { IUser } from '../core/interfaces';

export * from './reducers'
export * from './actions'

export interface IRootState {
    counter: number,
    currentUser: IUser,
}

export interface ILoginPageState {
    errorMessage: string,
    isLoginPending: boolean,
}

export interface IProfilePageState {
    currentProfile: IUser,
    isInEditMode: boolean,
    errorHappened: boolean,
}

export interface IAuthState {
    profile: IProfilePageState,
    login: ILoginPageState,
}

export interface IAuthModuleState extends IRootState {
    auth: IAuthState,
}