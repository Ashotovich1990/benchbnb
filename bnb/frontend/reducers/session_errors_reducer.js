import { RECEIVE_CURRENT_USER,RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';

const sessionErrorsReducer = (oldState = {errors: []}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
          newState = merge({},oldState,action.errors);
          return newState;
        case RECEIVE_CURRENT_USER:
          newState = merge({},oldState);
          newState.errors = [];
          return newState;
        default:
          return oldState;
    }
}

export default sessionErrorsReducer;