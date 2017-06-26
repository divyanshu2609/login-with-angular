import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {getUser, State} from "../reducers/index";
import {User} from "../models/user";
import {UserLoggedOutAction} from "../actions/user";
import {Router} from "@angular/router";
import {USER_AUTH_KEY} from "../constants";

@Component({
  selector: 'app-home-page',
  template: `
    <app-layout>
      <h1>welcome {{ username }}</h1>
      <button md-raised-button color="primary" (click)="logout()">logout</button>
    </app-layout>
  `,
  styles: ['#layout{position: absolute;width: 100%;height: 100%}']
})
export class HomePageComponent implements OnInit {
  username = 'guest'

  ngOnInit(): void {
  }

  constructor(private store: Store<State>, private router: Router) {
    this.store.select(getUser).subscribe((user: User) => {
      if (user != null) {
        console.log(user)
        this.username = user.name
      } else {
        this.username = 'guest'
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {

    localStorage.removeItem(USER_AUTH_KEY)
    console.log('logout of home page')
    this.store.dispatch(new UserLoggedOutAction())
  }
}
