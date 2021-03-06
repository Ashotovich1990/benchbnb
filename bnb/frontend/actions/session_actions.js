import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)))
);

export const login = (user) => dispatch => (
    SessionApiUtil.login({user})
    .then(res => dispatch(receiveCurrentUser(res)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
    .then(
        res => dispatch(logoutCurrentUser()),
        res => console.log("pirate")
        )
);