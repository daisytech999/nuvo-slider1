import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ChevronButton from "./ChevronButton";

function Slider() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const firstThree = data.slice(0, 3); // keep only first 3
      setProducts(firstThree);
    })
    .catch((err) => console.error("Error fetching products:", err));
}, []);



  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      {/* Product list with arrows */}
      <div className="product-list">
        {products.map((product, index) => (
          <div key={product.id} className="product-row">
            <div className="product-item" onClick={() => handleSelect(index)}>
              <img src={product.image} alt={product.title} />
              <span>{product.title}</span>
            </div>
            <ChevronButton
              isActive={activeIndex === index}
              onClick={() => handleSelect(index)}
            />
          </div>
        ))}
      </div>

      {/* Product details */}
      <div className="product-details">
        {products.length > 0 && activeIndex !== null && (
          <ProductCard product={products[activeIndex]} />
        )}
      </div>
    </div>
  );
}

export default Slider;
