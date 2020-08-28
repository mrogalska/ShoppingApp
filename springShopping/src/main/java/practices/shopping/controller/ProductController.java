package practices.shopping.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import practices.shopping.model.ProductEntity;
import practices.shopping.service.ProductService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;


    public ProductController(final ProductService productService) {

        this.productService = productService;
    }


    @GetMapping()
    public ResponseEntity<Object> getAllProducts() {

        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ProductEntity> getProductById(@PathVariable(value = "id") Long productId) {

        return new ResponseEntity<>(productService.getProductById(productId), HttpStatus.OK);
    }


    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> createProduct(@RequestBody ProductEntity productEntity) {

        return new ResponseEntity<>(productService.createProduct(productEntity), HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduct(@PathVariable(value = "id") Long productId,
                                                @Validated @RequestBody ProductEntity productDetails) {

        return new ResponseEntity<>(productService.updateProduct(productId, productDetails), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduct(@PathVariable(value = "id") Long productId) {

        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
