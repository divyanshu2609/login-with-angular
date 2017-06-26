import {Action} from '@ngrx/store'
import {User} from "../models/user";
export const LOGIN_SUCCESS = 'user-logged-in';
export const LOGIN_REQUEST = 'user-logging-in';
export const USER_LOGGED_OUT = 'user-logged-out';

export class UserLoggedInAction implements Action{
  readonly type = LOGIN_SUCCESS
  constructor(public payload: User) {
  }
}

export class UserLoggedOutAction implements Action{
  readonly type = USER_LOGGED_OUT
  constructor() {
  }
}

// export class UserLoggingInAction implements Action{
//     readonly type = LOGIN_REQUEST
//   constructor(public payload: User) {
//   }
// }
