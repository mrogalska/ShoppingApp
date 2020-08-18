package practices.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import practices.shopping.model.ProductEntity;
//import practices.shopping.model.ListEntity;
//import practices.shopping.model.ProductsOnList;
//import practices.shopping.repository.ListRepository;
import practices.shopping.repository.ProductRepository;
import practices.shopping.service.ProductService;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductRepository productRepository;
//    private final ListRepository listRepository;

    @Autowired
    ProductService productService;

//    public ProductController(final ProductRepository productRepository, final ListRepository listRepository) {
//        this.productRepository = productRepository;
//        this.listRepository = listRepository;
//    }
    public ProductController(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    
    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }


    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    public ResponseEntity<ProductEntity> getProductById(@PathVariable(value = "id") Long productId) {
        return new ResponseEntity<>(productService.getProductById(productId), HttpStatus.OK);
    }


    @RequestMapping(value = "/products", method = RequestMethod.POST,
            produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> createProduct(@RequestBody ProductEntity productEntity) {

        return new ResponseEntity<>(productService.createProduct(productEntity), HttpStatus.CREATED);
    }


    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateProduct(@PathVariable(value = "id") Long productId,
                                                       @Validated @RequestBody ProductEntity productDetails) {
        try {
            return new ResponseEntity<>(productService.updateProduct(productId, productDetails), HttpStatus.OK);
        } catch (NoSuchElementException ex) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }


    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteProduct(@PathVariable(value = "id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product has been deleted", HttpStatus.OK);
    }



}
