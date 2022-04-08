import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(first(), map(isLoggedIn => {
      if (isLoggedIn) {
        return true;
      }

      return this.router.createUrlTree(['/user/login'], {
        queryParams: {
          'redirect-to': '/' + route.url.map(f => f.path).join('/')
        }
      })
    }))

  }

}
