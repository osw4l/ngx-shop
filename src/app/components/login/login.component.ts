import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserInterface} from '../../models/user.interface';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import { ServicesService } from './login.service/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  users: any;
  constructor(public service: ServicesService,
              private router: Router,
              private location: Location) { }

  user: UserInterface = {
    username: '',
    password: '',
    email: ''
  };

  ngOnInit() {
     document.body.className = 'selector';
  }

  sendLocalStorage(data) {
    this.service.setToken(data.key);
  }

  onLogin() {
    this.service.login(this.user.username, this.user.password)
      .subscribe(
        data => {
          this.sendLocalStorage(data);
          this.location.replaceState('/');
          location.reload();
        },
        (error => {
          console.log(error['error']);
        })
      );
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
