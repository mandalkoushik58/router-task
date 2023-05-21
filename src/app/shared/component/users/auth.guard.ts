import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";




@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private _router:Router,
      private _authservice:AuthService){

    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| Promise<boolean>|Observable<boolean>{
       return this._authservice.isAuthenticated()
        .then((loginStatus:boolean)=>{
          if(loginStatus=== true){
            return true
          }else{
            this._router.navigate(['/'])
            return false
          }
        })
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
      return this.canActivate(childRoute,state)
  }
}
