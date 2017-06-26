import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {USER_AUTH_KEY} from "../constants";
import {Store} from "@ngrx/store";
import {State} from "../reducers/index";
import {UserLoggedInAction} from "../actions/user";

@Component({
  selector: 'app-form',
  template: `
    <div id="layout" fxLayoutAlign="center center">
      <md-card fxFlex="40%" fxFlex.xs="90%" fxFlex.lt-lg="70%">
        <form [formGroup]="loginForm" (ngSubmit)="loginForm.valid && login()"
              fxLayout="column" fxLayoutAlign="space-around stretch" fxLayoutGap="15px">
          <h1 style="font-style: italic">Sign in</h1>
          <md-input-container>
            <input mdInput placeholder="email" formControlName='email'>
            <md-error>invalid email</md-error>
          </md-input-container>
          <md-input-container>
            <input mdInput type="password" placeholder="password" formControlName='password'>
            <md-error>invalid passeord</md-error>
          </md-input-container>
          <button md-raised-button fxFlexAlign="start" color="primary" type="submit">sign in</button>
          <a routerLink="/signup">Not a member? Sign up!!</a>
        </form>
      </md-card>
    </div>
  `,
  styles: ['#layout{position: absolute;width: 100%;height: 100%}']
})
export class FormComponent {
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl


  constructor(private router: Router, private http: Http,private store: Store<State>) {

    this.emailControl = new FormControl(null, [Validators.required, Validators.email]);
    this.passwordControl = new FormControl(null, [Validators.required])

    this.loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  login() {
    this.http.get
    (environment.apiBaseUrl + '/auth/login?email=' + this.emailControl.value + '&password=' + this.passwordControl.value)
      .subscribe(
        response => {
          const json = response.json();
          localStorage.setItem(USER_AUTH_KEY, json.token)
          this.store.dispatch(new UserLoggedInAction(json.user));
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error.json().error)
        }
      )
  }

  signUpForm() {
    this.router.navigate(['/login']);
  }
}
