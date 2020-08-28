import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUpdateComponent } from './application/views/products/product-update/product-update.component';
import { ProductAddComponent } from './application/views/products/product-add/product-add.component';
import { ProductService } from './application/services/product.service';
import { Category } from './application/domain/enums/category';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material.module";
import { NavbarComponent } from './application/views/navbar/navbar.component';
import { ProductsComponent } from "./application/views/products/products.component";
import { LoginService } from "./application/services/login.service";
import { LoginPageComponent } from './application/views/login-page/login-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    

  ],
  declarations: [
    AppComponent,
    ProductUpdateComponent,
    ProductAddComponent,
    NavbarComponent,
    ProductsComponent,
    LoginPageComponent,
  ],
  providers: [
    ProductService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

