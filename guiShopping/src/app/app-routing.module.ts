import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component'


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addproduct', component: ProductFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
