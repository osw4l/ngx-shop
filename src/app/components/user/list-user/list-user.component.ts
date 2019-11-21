import {Component, OnInit} from '@angular/core';
import {UsurarioService} from '../services/usurario.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateUserComponent} from '../create-user/create-user.component';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  data_detalle: any;
  users_data: any;
  next_url = null;
  prev_url = null;
  current_url = null;
  users_url = `${environment.http_server}/api/usuarios/`;
  pages = null;
  items = null;

  constructor(public dialog: MatDialog,
              public service: UsurarioService) {
  }

  ngOnInit() {
    this.getDataUsers(this.users_url);
  }

  getDataUsers(url) {
    this.service.listUsers(url).subscribe(
      data => {
        this.users_data = data['results'];
        this.next_url = data['next'];
        this.prev_url = data['prev'];
        this.current_url = data['current_page'];
        this.pages = data['pages'];
        this.items = data['count'];
      }
    );
  }

  openDialog(detalle_product): void {
    this.data_detalle = detalle_product;
    const dialogRef = this.dialog.open(CreateUserComponent, {
      data: {
        data: this.data_detalle
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result['success']) {
        this.getDataUsers(this.users_url);
      }
      console.log('The dialog was closed');
    });
  }

  setPage(page) {
    window.scrollTo(0, 0);
    this.getDataUsers(`${this.users_url}?page=${page}`);
  }

}
