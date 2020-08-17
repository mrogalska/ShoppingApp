import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from '../category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
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
