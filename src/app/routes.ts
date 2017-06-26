import {Routes} from "@angular/router";
import {SignUpFormComponent} from "./Components/sign_up_form";
import {FormComponent} from "./Components/form";
import {HomePageComponent} from "./Components/home_screen";
import {AnonymousGuard} from "./guards/anonymous";
import {AuthGuard} from "./guards/auth";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: FormComponent, canActivate: [AnonymousGuard]},
  {path: 'signup', component: SignUpFormComponent, canActivate: [AnonymousGuard]},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]}
]
