import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {USER_AUTH_KEY} from "../constants";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(USER_AUTH_KEY)) {
      console.log('auth guard')
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
}
