import "./cart.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from "../contexts/CartContext";

export default function Productscart(){
 const { cart, editQuantity  } = useCart();
const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const productsJSX = cart.map((item)=>{

        return(
                    <div className="item d-flex  align-items-center flex-wrap justify-content-center" key={item.id}>
                    <div className="cart-img-parent"><img src={item.image} alt=""/> </div>
                    <h3 className="mx-3 fs-6 fst-italic my-3">{item.title}</h3>
                        <div className="icons  ms-md-auto d-flex justify-content-center align-items-center ">
                                    <RemoveIcon className="quantity" onClick={()=>{
                                        editQuantity(item , -1)
                                    }}/><p className="fs-5 fw-bold my-0  mx-2">{item.quantity}</p> <AddIcon className="quantity" onClick={()=>{
                                        editQuantity(item , 1) }}/>
                        </div>
                    </div>     
        );

    }) 
    return (
        <>
            <div className="container row justify-content-around  my-5 mx-auto ">
                    <div className="product-list  col-lg-9 "  data-aos="fade-up" data-aos-duration="1000">
                    <h2 className=' fs-1 fw-bold text-uppercase mb-3 fst-italic '>Items</h2>
                    <div className="items-parent mx-auto">
                    {productsJSX}

                    </div>
            </div>
            <div className="order-summary my-4  col-md-6 col-lg-3 "data-aos="fade-up" data-aos-duration="3000">

                <h2  className=' fs-6 fw-bold text-uppercase mb-3 fst-italic'>Order Summary</h2>
                <div className="d-flex justify-content-between"><p>Products Cost</p><p>{Math.round(totalPrice)}$</p></div>
                <div className="d-flex justify-content-between" ><p>shipping</p> <p style={{display: totalPrice ? "block" : "none"}}>30$</p></div>
                <div className="d-flex justify-content-between"   ><p className="fs-5 fw-bold fst-italic">Total</p> <p className="fs-5 fw-bold fst-italic" style={{display: totalPrice ? "block" : "none"}}>{Math.round(totalPrice)+30}$</p></div>
                <Link className="" to={"/checkout"}><Button className="btn w-100 my-3" >Go To Checkout</Button></Link>

            </div>
            
            </div>

        </>
    )
}