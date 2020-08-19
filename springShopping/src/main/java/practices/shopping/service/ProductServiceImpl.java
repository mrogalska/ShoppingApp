package practices.shopping.service;

import org.springframework.stereotype.Service;
import practices.shopping.model.ProductEntity;
import practices.shopping.repository.ProductRepository;
import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;


    public ProductServiceImpl(final ProductRepository productRepository) {

        this.productRepository = productRepository;
    }


    @Override
    public List<ProductEntity> getAllProducts() {

        return productRepository.findAll();
    }


    @Override
    public ProductEntity getProductById(Long productId) {

        ProductEntity productEntity = productRepository.findById(productId).orElseThrow();
        return productEntity;
    }


    @Override
    public ProductEntity createProduct(ProductEntity productEntity) {

        return productRepository.save(productEntity);
    }


    @Override
    public ProductEntity updateProduct(Long productId, ProductEntity productDetails) {

        ProductEntity productEntity = productRepository.findById(productId).orElseThrow();
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
