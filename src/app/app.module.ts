import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { CreateVentaComponent } from './components/venta/create-venta/create-venta.component';
import { ServicesService } from './components/login/login.service/services.service';
import {NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule, } from '@angular/material/autocomplete';
import { DetalleVentaComponent } from './components/venta/detalle-venta/detalle-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CreateUserComponent,
    ListUserComponent,
    NavbarComponent,
    CreateProductoComponent,
    ListProductoComponent,
    ListVentaComponent,
    CreateVentaComponent,
    DetalleVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    NgbPaginationModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [ServicesService],
  entryComponents: [
    CreateProductoComponent,
    CreateUserComponent,
    DetalleVentaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
