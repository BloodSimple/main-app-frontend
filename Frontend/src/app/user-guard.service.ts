import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./service/authentication.service";

@Injectable()
export class UserGuardService implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
        // if(this.authService.userAccess())
        // {
        //     return true;
        // }
        
        // this.router.navigate(['/'])
        // return false;
    }
}