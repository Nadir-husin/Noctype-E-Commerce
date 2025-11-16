import { useContext , createContext ,useState , useEffect } from "react";
import axios from "axios";


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
        const [products , setProducts] = useState([])
    
         useEffect(()=>{
         axios.get('https://fakestoreapi.com/products/')
        .then(function (response) {
        setProducts(response.data)
      }) 
    },[])
    
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )

};  
export const useProducts = () => {
    return useContext(ProductsContext);
}