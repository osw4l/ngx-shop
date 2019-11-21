import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListVentaComponent } from '../list-venta/list-venta.component';
@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {
  data_detalle: any;
  data_detalle_productos: any;
  constructor(public dialogRef: MatDialogRef<ListVentaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data_detalle  = this.data['data'];
    this.data_detalle_productos = this.data_detalle.productos;
    console.log(this.data_detalle_productos);
    console.log(this.data_detalle);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
