import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../login/login.service/services.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  constructor(private service: ServicesService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.onCheckUser();
  }

  onCheckUser() {
    this.isLogged = this.service.getToken() != null;
  }

  cleangLocalStorage() {
    localStorage.removeItem('accessToken');
  }

  onLogout() {
    this.service.logoutUser().subscribe(
      data => {
        location.reload();
        this.cleangLocalStorage();
        this.router.navigate(['login']);
      },
      error => {
        window.location.reload();
        this.router.navigate(['login']);
        this.cleangLocalStorage();
      }
    );
  }

}
