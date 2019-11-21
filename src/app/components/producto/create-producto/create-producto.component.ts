import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListProductoComponent } from '../list-producto/list-producto.component';
import { Product } from 'src/app/models/create.product';
import { ProductoService } from '../services/producto.service';
@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit, OnDestroy {
  public product: Product;
  data_detalle: any;
  update_id = null;
  update = false;
  message = 'Crear producto';
  result = false;
  constructor(private _product_service: ProductoService,
              public dialogRef: MatDialogRef<ListProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.product =  new Product('', '', null , null);
     }

  ngOnInit() {
    this.data_detalle  = this.data['data'];
    if (this.data_detalle) {
      this.update_id = this.data_detalle['id'];
      this.product =  new Product('', this.data_detalle.nombre , this.data_detalle.cantidad , this.data_detalle.precio);
      console.log('update');
      this.message = 'Editar producto';
      this.update = true;
    }
  }

  onSubmit = (registerForm) => {
    console.log(this.update_id);
    if (this.update) {
      this._product_service.updateProduct(this.update_id, this.product).subscribe(data => {
        console.log(data);
        this.product =  new Product('', '', null , null);
        registerForm.reset();
        this.result = true;
        this.ngOnDestroy();
        this.dialogRef.close();
      }
    );
       console.log('servicio update');
    } else {
      this._product_service.registerProduct(this.product).subscribe(data => {
        console.log(data);
        this.product =  new Product('', '', null , null);
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
