import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent} from './products/products.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './product.service';
import { Category } from './category';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    ProductSearchComponent,
    ProductFormComponent
  ],
  providers: [
    ProductService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
