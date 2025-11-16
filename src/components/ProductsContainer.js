import ProductCard from "./ProductCard";
import { useProducts } from "../contexts/ProductsContext";
  


export default function ProductsContainer() {

const {products} = useProducts();

const Products= products.map((product)=><ProductCard key={product.id} product={product} />)


return(
    <>
    <div className="row  justify-content-center align-items-center m-0 p-0">
        {Products}
        </div>
    </>
);

}
