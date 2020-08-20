import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../domain/external/product';
import { Category } from '../../../domain/enums/category';



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input() product: Product;

  public _category = Category;
  public _categories = [];

  constructor(
    // prywatne zaczynamy od _
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this._categories = Object.keys(this._category);
  }

  public get $category() {
    return this._category;
  }

  public get $categories() {
  return this._categories;
  }

  getProduct(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this._location.back();
  }

  save(): void {
    this._productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

}

