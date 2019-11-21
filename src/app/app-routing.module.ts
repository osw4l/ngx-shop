import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { CreateVentaComponent } from './components/venta/create-venta/create-venta.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'productos', component: ListProductoComponent, canActivate: [AuthGuard]},
  {path: 'usuarios', component: ListUserComponent, canActivate: [AuthGuard]},
  {path: 'ventas', component: ListVentaComponent, canActivate: [AuthGuard]},
  {path: 'crear-venta', component: CreateVentaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
