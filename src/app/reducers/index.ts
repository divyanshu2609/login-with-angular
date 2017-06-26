import {User} from "../models/user";
import {Action} from "@ngrx/store";
import {LOGIN_SUCCESS, USER_LOGGED_OUT} from "../actions/user";

export interface State {
  user: User
}

export const initialState: State = {
  user: null,
}

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {user: action.payload}
    case USER_LOGGED_OUT:
      console.log('logged out')
      return {user: null}
    default:
      return state
  }
}

export const getUser = (state: State) => state.user
