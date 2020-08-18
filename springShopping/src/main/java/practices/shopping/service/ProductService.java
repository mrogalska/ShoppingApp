package practices.shopping.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import practices.shopping.model.ProductEntity;
import practices.shopping.repository.ProductRepository;

@Service
public interface ProductService {

    public abstract List<ProductEntity> getAllProducts();
    public abstract ProductEntity getProductById(Long productId);
    public abstract ProductEntity createProduct(ProductEntity product);
    public abstract ProductEntity updateProduct(Long id, ProductEntity productEntity);
    public abstract void deleteProduct(Long id);
}
