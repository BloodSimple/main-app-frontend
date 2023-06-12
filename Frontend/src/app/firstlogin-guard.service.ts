import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./service/authentication.service";
import { UserService } from "./service/user.service";

@Injectable()
export class FirstLoginGuardService implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router, private userService: UserService) {}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return true;
        if(this.authService.medicalAdminAccess())
        {
            return true;
        }
        
        this.router.navigate(['/'])
        return false;
    }
}