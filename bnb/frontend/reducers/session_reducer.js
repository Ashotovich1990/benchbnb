import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {merge} from 'lodash';

const sessionReducer = (oldState = { id: null}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({},oldState);
            newState.id = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = merge({},oldState);
            newState.id = null;
            return newState;
        default:
            return oldState;
    }
}

export default sessionReducer;