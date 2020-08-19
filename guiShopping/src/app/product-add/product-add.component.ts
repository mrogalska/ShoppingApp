import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../application/services/product.service';
import { Product } from '../application/domain/external/product';
import { Category } from '../application/domain/enums/category';
import { Location } from '@angular/common';
import { MaterialModule } from "../modules/material.module";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product;
  public category = Category;
  public categories = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private location: Location
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.categories = Object.keys(this.category);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(result => this.goToProductList());
  }

  goToProductList() {
    this.router.navigate(['/products'])
  }
}
