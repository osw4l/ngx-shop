import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListUserComponent } from '../list-user/list-user.component';
import { User } from 'src/app/models/create.user';
import { UsurarioService } from '../services/usurario.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  data_detalle: any;
  message = 'Crear usuario';
  update_id = null;
  update = false;
  result = false;
  public user: User;
  constructor(private _user_service: UsurarioService,
              public dialogRef: MatDialogRef<ListUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.user =  new User('', '', '', '', '', '');
              }

  ngOnInit() {
    this.data_detalle = this.data['data'];
    if (this.data_detalle) {
      this.update_id = this.data_detalle['id'];
      this.user =  new User('', this.data_detalle.username, this.data_detalle.first_name,
                            this.data_detalle.last_name, '' , this.data_detalle.email);
      console.log('update');
      this.message = 'Editar usuario';
      this.update = true;
    }
    console.log(this.data_detalle);
  }

  onSubmit = (registerForm) => {
    if (this.update) {
      this._user_service.updateUser(this.update_id, this.user).subscribe(data => {
        console.log(data);
        this.user =  new User('', '', '', '', '', '');
        registerForm.reset();
        this.dialogRef.close();
        this.result = true;
        this.ngOnDestroy();
      }
    );
    } else {
      this._user_service.register(this.user).subscribe(data => {
        console.log(data);
        this.user =  new User('', '', '', '', '', '');
        registerForm.reset();
        this.result = true;
        this.ngOnDestroy();
        this.dialogRef.close();
      }
    );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.dialogRef.close({success: this.result});
  }

}
