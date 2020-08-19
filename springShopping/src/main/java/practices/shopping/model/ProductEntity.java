package practices.shopping.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "PRODUCTS")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Column(length = 500)
    private String name;

    @Column(columnDefinition = "default double 0.0")
    private double price;

    private String category;

    @OneToMany(mappedBy = "productEntity")
    Set<UserProducts> userProducts;

}
