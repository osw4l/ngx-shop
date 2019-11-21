import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { ServicesService } from '../components/login/login.service/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: ServicesService, private router: Router) {
  }

  canActivate() {
    if (this.service.getToken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
