// ProductCard component shows details for the active product:
// - Price
// - Description
// - Rating stars + number of reviews
// - "Add to Cart" button (non-functional for this test)
function ProductCard({ product }) {
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
