import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../domain/external/product';
import { Category } from '../../../domain/enums/category';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product;
  private _category = Category;
  private _categories = [];

  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _location: Location
  ) {
    this.product = new Product();
  }

  public get $category() {
    return this._category;
  }

  public get $categories() {
  return this._categories;
  }


  ngOnInit(): void {
    this._categories = Object.keys(this._category);
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit() {
    this._productService.addProduct(this.product).subscribe(result => this.goToProductList());
  }

  goToProductList() {
    this._router.navigate(['/products'])
  }
}
