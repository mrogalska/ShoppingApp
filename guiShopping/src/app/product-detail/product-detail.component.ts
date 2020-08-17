import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Category } from '../category';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  public category = Category;
  public categories = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.categories = Object.keys(this.category);
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

}

