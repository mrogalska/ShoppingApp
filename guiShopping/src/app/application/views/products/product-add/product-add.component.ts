import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
