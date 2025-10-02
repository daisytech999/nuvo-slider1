function ProductCard({ product }) {
  const stars = Math.round(product.rating?.rate || 0);

  return (
    <div className="card">
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <div className="rating">
        <span className="stars">
        {"★".repeat(Math.floor(product.rating?.rate || 0))}
        {"☆".repeat(5 - Math.floor(product.rating?.rate || 0))}
        </span>
        <span className="count"> ({product.rating?.count})</span> 
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
