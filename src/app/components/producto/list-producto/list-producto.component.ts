import {Component, OnInit} from '@angular/core';
import {ProductoService} from '../services/producto.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateProductoComponent} from '../create-producto/create-producto.component';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  products_data: any;
  next_url = null;
  prev_url = null;
  current_url = null;
  productos_url = `${environment.http_server}/api/productos/`;
  pages = null;
  items = null;
  data_detalle: any;

  constructor(public dialog: MatDialog,
              public service: ProductoService) {
  }

  ngOnInit() {
    this.getDataProducts(this.productos_url);
  }

  getDataProducts(url) {
    this.service.listProducts(url).subscribe(
      data => {
        this.products_data = data['results'];
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
    const dialogRef = this.dialog.open(CreateProductoComponent, {
      data: {
        data: this.data_detalle
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result['success']) {
        this.getDataProducts(this.productos_url);
      }
      console.log('The dialog was closed');
    });
  }

  setPage(page) {
    window.scrollTo(0, 0);
    this.getDataProducts(`${this.productos_url}?page=${page}`);
  }

}
