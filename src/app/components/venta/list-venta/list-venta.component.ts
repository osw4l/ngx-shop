import { Component, OnInit } from '@angular/core';
import { VentaService } from '../services/venta.service';
import {environment} from '../../../../environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetalleVentaComponent } from '../detalle-venta/detalle-venta.component';
@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit {
  data_detalle: any;
  venta_data: any;
  // pagination stuff
  next_url = null;
  prev_url = null;
  current_url = null;
  ventas_url = `${environment.http_server}/api/ventas/`;
  pages = null;
  items = null;
  constructor(public dialog: MatDialog,
              public service: VentaService) { }

  ngOnInit() {
    this.getDataVentas(this.ventas_url);
  }

  getDataVentas(url) {
    this.service.listVentas(url).subscribe(
      data => {
        this.venta_data = data['results'];
        this.next_url = data['next'];
        this.prev_url = data['prev'];
        this.current_url = data['current_page'];
        this.pages = data['pages'];
        this.items = data['count'];
        console.log(this.venta_data);
      }
    );
  }

  setPage(page) {
    window.scrollTo(0, 0);
    this.getDataVentas(`${this.ventas_url}?page=${page}`);
  }

  openDialog(detalle_product): void {
    this.data_detalle = detalle_product;
    const dialogRef = this.dialog.open(DetalleVentaComponent, {
      data: {
        data: this.data_detalle
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
