import {Component, Inject, OnInit} from '@angular/core';
import {ProductoService} from '../../producto/services/producto.service';
import {VentaService} from '../services/venta.service';

@Component({
  selector: 'app-create-venta',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent {
  keyword = 'Escriba el producto que desea buscar';
  data = [];
  option = null;
  productos_venta = [];
  success = false;
  error = null;

  constructor(private productoService: ProductoService,
              private ventaService: VentaService) {
  }

  onChangeSearch($event) {
    const val = $event.target.value;
    if (val.length > 0) {
      this.productoService.searchProducto(val).subscribe(
        data => {
          this.data = data['results'];
        });
    } else {
      this.data = [];
    }
  }

  addProducto(id, nombre, disponible, valor) {
    if (!this.exist(id)) {
      this.productos_venta.push({
        id: id,
        cantidad: 1,
        nombre: nombre,
        disponible: disponible,
        valor: valor
      });
    } else {
      const index = this.productos_venta.findIndex(producto => producto.id === id);
      if (index !== -1) {
        this.productos_venta[index]['cantidad'] += 1;
      }
    }
  }

  exist(id) {
    console.log(this.productos_venta.find(producto => producto.id === id));
    return this.productos_venta.find(producto => producto.id === id);
  }

  agregar(index) {
    this.productos_venta[index]['cantidad'] += 1;
  }

  descontar(index) {
    this.productos_venta[index]['cantidad'] -= 1;
  }

  remover(index) {
    this.productos_venta.splice(index, 1);
  }

  enviarPedido() {
    this.error = null;
    this.ventaService.enviarVenta({productos: this.productos_venta}).subscribe(
      data => {
        this.productos_venta = [];
        this.data = [];
        this.setSuccess(true);
      }, error => {
        console.log(error);
        this.error = error;
      });
  }

  setSuccess(value) {
    this.success = value;
  }
}
