
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { useProducts } from "../contexts/ProductsContext";




export default function ProductFilter() {

    const [alignment, setAlignment] =  useState('all');
    const [filterProducts, setFilterProducts] = useState([]);
    const {products} = useProducts();
    

    useEffect(()=>{
    if(alignment==='all'){
     setFilterProducts(products);
    }
    else{
     const filtered= products.filter((product)=>product.category===alignment);
     setFilterProducts (filtered);
    }
    },[alignment, products]);


    function handleAlignment(e){
        setAlignment(e.target.value);
    }
        return (
            <>
                <div className='products-filter-container'>
                <h2 className="text-center fs-1 pb-4 ">Our Products!</h2>
                <hr style={{color:'#f7c16a', width:"75%", margin:'0 auto'}}/>
                <div className='d-flex justify-content-center align-items-center m-3'>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        className="d-flex flex-wrap justify-content-center gap-2 p-2"
                    >
                    <ToggleButton value="all" >
                        All
                    </ToggleButton>
                    <ToggleButton value="men's clothing" >
                        Men's Clothing
                    </ToggleButton>
                    <ToggleButton value="women's clothing">
                        Women's Clothing
                    </ToggleButton>
                    <ToggleButton value="jewelery">
                        Jewelery
                    </ToggleButton>
                    <ToggleButton value="electronics">
                        Electronics
                    </ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <div className="row g-3 justify-content-center align-items-center m-0 p-0">
                        {filterProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
               </div>
            </>
        )

}