import { useSelector } from "react-redux";
import Product from "./Product";
const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="container">
      <div className="row">
        {products?.map((data) => (
          <div className="col-md-3">
            <Product
              title={data?.title}
              description={data?.description}
              imageSrc={data?.imageSrc}
              imageAlt={data?.imageAlt}
              price={data?.price}
              id={data?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
