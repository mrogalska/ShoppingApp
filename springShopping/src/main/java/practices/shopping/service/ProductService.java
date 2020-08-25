package practices.shopping.service;

import java.util.List;
import practices.shopping.model.ProductEntity;


public interface ProductService {

    List<ProductEntity> getAllProducts();
    ProductEntity getProductById(Long productId);
    ProductEntity createProduct(ProductEntity productEntity);
    ProductEntity updateProduct(Long productId, ProductEntity productEntity);
    void deleteProduct(Long productId);

}
