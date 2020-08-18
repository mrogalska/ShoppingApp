package practices.shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import practices.shopping.model.ProductEntity;
import practices.shopping.repository.ProductRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;



    @Override
    public List<ProductEntity> getAllProducts() {
        return productRepository.findAll();
    }


    @Override
    public ProductEntity getProductById(Long productId) {
        Optional<ProductEntity> productEntityOptional = productRepository.findById(productId);
        ProductEntity productEntity = productEntityOptional.get();
        return productEntity;
    }


    @Override
    public ProductEntity createProduct(ProductEntity productEntity) {
        return productRepository.save(productEntity);
    }


    @Override
    public ProductEntity updateProduct(Long productId, ProductEntity productDetails) {
        Optional<ProductEntity> productEntityOptional = productRepository.findById(productId);
        ProductEntity productEntity = productEntityOptional.get();
        productEntity.setName(productDetails.getName());
        productEntity.setCategory(productDetails.getCategory());
        productEntity.setPrice(productDetails.getPrice());
        return productRepository.save(productEntity);
    }


    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

}
