import { createAction, createReducer, createSelector, on } from '@ngrx/store';

export interface User {
	username: string;
	firstName: string;
	lastName: string;
	role: string;
}

export interface AuthState {
	user: User | null;
	isLoggedIn: boolean;
}

// Actions
export const login = createAction('[Login Page] User Login', (user: User) => ({
	user,
}));

export const logout = createAction('[Navbar] User Logout');

// Reducer
const initialState: AuthState = {
	user: null,
	isLoggedIn: false,
};

const _authReducer = createReducer(
	initialState,
	on(login, (state: AuthState, { user }) => ({
		...state,
		user,
		isLoggedIn: true,
	})),
	on(logout, (state: AuthState) => ({
		...state,
		user: null,
		isLoggedIn: false,
	}))
);

export function authReducer(state: AuthState | undefined, action: any) {
	return _authReducer(state, action);
}
