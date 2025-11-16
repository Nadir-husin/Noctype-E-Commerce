import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import './about.css';


import Mens from "../assets/mens.jpg";
import Women from "../assets/women.jpg";
import Jewelery from "../assets/jewelery.jpg";
import Electronics from "../assets/electronics.jpg";

export default function Aboutus() {


  return (
    <>
      <div
        className="about-section container text-center py-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="about-title fs-1 fw-bold text-uppercase mb-3">About Us</h2>
        <hr className="w-25 mx-auto" />

        <p className="about-description mx-auto" style={{ lineHeight: "1.8", maxWidth: "900px" }}>
          Welcome to our e-commerce store! We are dedicated to providing you with a seamless shopping
          experience, offering a wide range of high-quality products at competitive prices. Our
          mission is to make online shopping easy, enjoyable, and accessible for everyone. Whether
          you're looking for the latest gadgets, fashionable apparel, or unique home decor, we've got
          you covered. Thank you for choosing us as your go-to destination for all your shopping
          needs!
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h3 className="fs-2 fw-bold mt-5 mb-4" data-aos="fade-up">Our Products</h3>

        <div
          className="row justify-content-center g-5"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Men's Clothing */}
          <div className="pro-cat col-12 col-sm-6 col-lg-3">
            <Link to="/products" className="text-decoration-none text-dark">
              <div className="cat-img-parent mx-auto mb-3" style={{ width: "75%" }}>
                <img src={Mens} alt="Men's clothing" className="img-fluid rounded shadow-sm" />
              </div>
              <h4 className="fw-bold">Men's Clothing</h4>
            </Link>
          </div>

          {/* Women's Clothing */}
          <div className="pro-cat col-12 col-sm-6 col-lg-3">
            <Link to="/products" className="text-decoration-none text-dark">
              <div className="cat-img-parent mx-auto mb-3" style={{ width: "75%" }}>
                <img src={Women} alt="Women's clothing" className="img-fluid rounded shadow-sm" />
              </div>
              <h4 className="fw-bold">Women's Clothing</h4>
            </Link>
          </div>

          {/* Jewelery */}
          <div className="pro-cat col-12 col-sm-6 col-lg-3">
            <Link to="/products" className="text-decoration-none text-dark">
              <div className="cat-img-parent mx-auto mb-3" style={{ width: "75%" }}>
                <img src={Jewelery} alt="Jewelery" className="img-fluid rounded shadow-sm" />
              </div>
              <h4 className="fw-bold">Jewelery</h4>
            </Link>
          </div>

          {/* Electronics */}
          <div className="pro-cat col-12 col-sm-6 col-lg-3">
            <Link to="/products" className="text-decoration-none text-dark">
              <div className="cat-img-parent mx-auto mb-3" style={{ width: "75%" }}>
                <img src={Electronics} alt="Electronics" className="img-fluid rounded shadow-sm" />
              </div>
              <h4 className="fw-bold">Electronics</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
