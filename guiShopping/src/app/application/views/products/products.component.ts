import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/external/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private _displayedColumns: string[] = ['name', 'category', 'price', 'id'];
  private _products: Product[];
  private _showOptions: number = 0;
  private _pricesArray: number[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this._products = data;
    })
  }

    //  czemu tu bezpośrednio id nie przysyłasz?
    delete(product: Product): void {
      this._products = this._products.filter(h => h !== product);
      this.productService.deleteProduct(product).subscribe();
    }


  // getters and setters

  public get $displayedColumns() {
    return this._displayedColumns;
  }

  public set $displayedColumns(value: string[]) {
    this._displayedColumns = value;
  }

  public get $products() {
    return this._products;
  }

  public set $products(value: Product[]) {
    this._products = value;
  }

  public get $showOptions() {
    return this._showOptions;
  }

  public set $showOptions(value: number) {
    this._showOptions = value;
  }

  public get $pricesArray() {
    return this._pricesArray;
  }

  public set $pricesArray(value: number[]) {
    this._pricesArray = value;
  }

}

