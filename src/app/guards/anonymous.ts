import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {USER_AUTH_KEY} from "../constants";
import {Injectable} from "@angular/core";

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(USER_AUTH_KEY)) {
      this.router.navigate(['/home'])
      return false;
    }

    return true;
  }
}
