package practices.shopping.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

// Poczytaj co to Lombok
@Entity
@Table(name = "USER_PRODUCTS")
@AllArgsConstructor
@NoArgsConstructor
@Data
// doczytaj co to serializable
public class ProductEntity implements Serializable {


    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Column(length = 500)
    private String name;

//    po co
    @Column()
    private double price;

    //    po co
    @Column()
    private String category;

    @OneToMany(mappedBy = "productEntity")
    Set<UserProducts> userProducts;


// Usuwamy takie fragmenty kodu od tego mamy gita
//    @OneToMany(mappedBy = "productEntity")
//    Set<ProductsOnList> productsOnLists;

    public ProductEntity(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

//    public Set<ProductsOnList> getProductsOnLists() {
//        return productsOnLists;
//    }
//
//    public void setProductsOnLists(Set<ProductsOnList> productsOnLists) {
//        this.productsOnLists = productsOnLists;
//    }
}
