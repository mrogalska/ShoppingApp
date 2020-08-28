import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './application/views/products/products.component';
import { ProductUpdateComponent } from './application/views/products/product-update/product-update.component';
import { ProductAddComponent } from './application/views/products/product-add/product-add.component';
import { LoginPageComponent } from "./application/views/login-page/login-page.component";



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'products/:id', component: ProductUpdateComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addproduct', component: ProductAddComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

