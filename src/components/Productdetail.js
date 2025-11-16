import { useParams, Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useProducts } from '../contexts/ProductsContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useCart } from '../contexts/CartContext';
function ProductDetail() {
  const { products } = useProducts();
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  const {addToCart} =useCart()

  if (!product) {
    return <div>Product not found!</div>;
  }



  return (
    <>

      <div className="product-detail-parent container py-4" data-aos="fade-up" data-aos-duration="1000">
        <div className="row g-4 justify-content-center align-items-center">


          <div className="img-parent col-12 col-md-5 text-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>


          <div className="detail-info col-12 col-md-6 text-center text-md-start">
            <h4 className="text-uppercase text-secondary">{product.category}</h4>
            <h2 className="fw-bold">{product.title}</h2>

            <p className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              {product.rating.rate} <StarIcon style={{ color: '#f7c16a' }} />
            </p>

            <p className="fs-5 fw-semibold">Price: ${product.price}</p>
            <p className="text-muted">{product.description}</p>

            <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <button className="btn btn-dark px-4 py-2" onClick={()=>{
                addToCart(product)
              }}>Add to Cart</button>
              <button className="btn btn-other px-4 py-2" onClick={()=>{
                addToCart(product)
              }}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/*  swiper */}
      {products.length > 0 && (
        <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-center mb-4">Suggested Products</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/products/${item.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="text-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '180px',
                        height: '180px',
                        objectFit: 'contain',
                      }}
                    />
                    <h6 className="mt-2">{item.title}</h6>
                    <p className="fw-semibold">${item.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      
    </>
  );
}

export default ProductDetail;
