package practices.shopping.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductEntity {

    @Id
    @SequenceGenerator(name = "_product_id_seq_gen", sequenceName = "_product_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "_product_id_seq_gen")
    private long id;

    @Column(length = 500)
    private String name;

    @Column(columnDefinition = "default double 0.0")
    private double price;

    private String category;

//    @OneToMany(mappedBy = "productEntity")
//    Set<UserProduct> userProducts;


}
