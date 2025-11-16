import "./productcard.css";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const{addToCart} = useCart()


  return (
    <div
      className="col-xl-3 col-lg-4 col-sm-6"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="product-card">
        <Link
          style={{ color: "#0A2647", textDecoration: "none" }}
          to={`/products/${product.id}`}
        >
          <div className="product-img-parent">
            <img src={product.image} alt="" className="product-img" />
          </div>
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p>{product.description}</p>
            <h3>{product.price}$</h3>
          </div>
        </Link>

        <button
          className="btn btn-dark px-4 py-2 mt-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
