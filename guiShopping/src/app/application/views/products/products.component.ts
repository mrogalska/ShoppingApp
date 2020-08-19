import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/external/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // Pola prywatne, enkapsulacja danych
  displayedColumns: string[] = ['name', 'category', 'price', 'id'];
  products: Product[];
  showOptions: number = 0;
  pricesArray: number[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    // osobna funkcja
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  //  czemu tu bezpośrednio id nie przysyłasz?
  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}

