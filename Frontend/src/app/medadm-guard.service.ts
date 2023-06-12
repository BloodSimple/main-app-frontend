import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./service/authentication.service";
import { UserService } from "./service/user.service";

@Injectable()
export class MedAdminGuardService implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router, private userService: UserService) {}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return true;
        if(this.authService.medicalAdminAccess())
        {
            var lsUser = localStorage.getItem('currentUser');
            // var loadedRole = lsUser?.role;
            const object = JSON.parse(lsUser || ' ');
    
            //check if it is first login
            this.userService.isFirstLogin(object.email).subscribe(response => {
                console.log("Da li je prvi log");
                console.log(JSON.stringify(response));
                if(response==true)
                {
                    this.router.navigate(['/first-login'])
                    return false;
                }
                //if first navigate to first login, else return true
                return true;
            });

            return true;
        }
        
        this.router.navigate(['/'])
        return false;
    }
}