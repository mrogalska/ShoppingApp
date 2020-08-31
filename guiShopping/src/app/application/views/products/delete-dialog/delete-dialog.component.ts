import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../domain/external/product';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {


  private _products: Product[];
  id: number = 0;


  constructor(private _productService: ProductService,     
    @Inject(MAT_DIALOG_DATA) private productId: number) { 
      if(productId) {
        this.id = productId;
      }
    }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this._products = data;
    })
  }


  
  delete(): void {
    this._productService.deleteProduct(this.id).subscribe(
      () => {
      }, (error) => {
        if (error.status == 500) {
          alert("This product has been already deleted");
        }
        this.getProducts();
      }
    )
  }

}
