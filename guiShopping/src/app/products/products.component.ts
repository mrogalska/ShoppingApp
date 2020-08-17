import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table'; 
import { SelectionModel } from '@angular/cdk/collections';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'id'];
  products: Product[];
  showOptions: number = 0;
  pricesArray: number[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

  // getTotalCost(): number {
  //   this.pricesArray = this.products.map(t => t.price);
  //   this.amountArray = this.products.map(t => t.amount);
  //   var prod = [];
  //   for(var i = 0; i < this.amountArray.length; i++) {
  //     prod.push(this.pricesArray[i] * this.amountArray[i]);
  //   }
  //   console.log(prod);
  //   return prod.reduce(this.sum, 0);
  // }

  // getTotalAmount(): number {
  //   return this.products.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  // }

//   sum(a, b): number {
//     return a + b;
// }

}

