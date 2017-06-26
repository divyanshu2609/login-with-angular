import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sign_up',
  template: `
    <div id="layout" fxLayoutAlign="center center">
      <md-card fxFlex="40%" fxFlex.xs="90%" fxFlex.lt-lg="70%">
        <form [formGroup]="loginForm" (ngSubmit)="loginForm.valid && login()"
              fxLayout="column" fxLayoutAlign="space-around stretch" fxLayoutGap="15px">
          <h1 style="font-style: italic">Sign Up</h1>
          <md-input-container>
            <input mdInput placeholder="Name">
          </md-input-container>
          <md-input-container>
            <input mdInput placeholder="Username">
          </md-input-container>
          <div fxLayoutAlign="space-between center">
            <md-input-container fxFlex="40%">
              <input mdInput [mdDatepicker]="picker" placeholder="date of birth">
              <button mdSuffix [mdDatepickerToggle]="picker"></button>
            </md-input-container>
            <md-datepicker #picker></md-datepicker>
            <section class="example-section" fxFlex="40%">
              <label class="example-margin">gender:</label>
              <md-radio-group>
                <md-radio-button class="example-margin" value="start">male</md-radio-button>
                <md-radio-button class="example-margin" value="end">female</md-radio-button>
              </md-radio-group>
            </section>
          </div>
          <md-input-container>
            <input mdInput placeholder="choose your email id" formControlName="email">
            <md-error>invalid email</md-error>
          </md-input-container>
          <md-input-container>
            <input mdInput type="password" placeholder="password" formControlName="password">
          </md-input-container>
          <md-input-container>
            <input mdInput type="password" placeholder="confirm password">
          </md-input-container>
          <button md-raised-button fxFlexAlign="start" color="primary" type="submit">sign up</button>
          <a routerLink="/login">Already a member? Sign in!!</a>
        </form>
      </md-card>
    </div>
  `,
  styles: ['#layout{position: absolute;width: 100%;height: 100%}']
})
export class SignUpFormComponent {
  loginForm: FormGroup;
  align = 'start';

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  signInForm() {
    this.router.navigate(['/login']);
  }
}
