import React from 'react';
import Herolanding from '../assets/landing-image.png'
import './home.css'
export default function HeroImg() {
    return (

        <>
        
        <div className='hero-parent'>
        <div className='hero-title'>
            <h1>Welcome to Noctype store</h1>
            <p>Welcome to our store ! a wide range of high-quality products at competitive prices , all in one place . Enjoy a seamless shopping experience with fast delivery and exclusive deals.</p>
        </div>
        <div className='landing'>
            <img src={Herolanding} alt=''/>
        </div>
        </div>
        </>

    );
}