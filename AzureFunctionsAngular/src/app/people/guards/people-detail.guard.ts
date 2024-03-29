import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleDetailGuard implements CanActivate {
  
  
  constructor(private router: Router) {

  }
  
  
  // This checks "before" routing to the page to see if we can i.e. do we have a guid/id in the route param for example
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //let id = +next.url[1].path;  // +next casts to a number, although our ID's are guids
      let id = next.url[1].path.toString();
      if (id === undefined || id === null) {
        alert("Invalid person Id");
        this.router.navigate(['/people']);
        return false;
      }
      else {
        return true;
      }
  }
  
}
