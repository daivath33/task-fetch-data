import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./../product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsExists = products.length > 0;

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProductHandler = (id) => {
    const prod = products.filter((p) => p.id !== id);
    setProducts(prod);
  };

  return (
    <>
      {productsExists && (
        <>
          <h1>Products</h1>
          <div className="prod-container">
            {products.map((p) => (
              <Product
                key={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
                onClick={() => deleteProductHandler(p.id)}
              />
            ))}
          </div>
        </>
      )}
      {!productsExists && <h1>Products are sould out!</h1>}
    </>
  );
};

export default Products;
