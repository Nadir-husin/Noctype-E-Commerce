import { Button } from 'react-bootstrap';
import './contact.css';


export default function Contactus() {



    return(
        <>
        
        <div className="contactus-container container text-center my-5" data-aos="fade-up" data-aos-duration="1000"> 
            <h2 className="fs-1 fw-bold">Contact Us</h2>
            <hr className="w-25 mx-auto" />
            <form className="contactus-form w-50 mx-auto d-flex flex-column gap-3 mt-4">
                <label>Name:</label>
                <input type="text" name="name"placeholder='Enter your name ' required data-aos="fade-up" data-aos-duration="1500" />
                <label>Email:</label>
                <input type="email" name="email" placeholder='name@example.com' required data-aos="fade-up" data-aos-duration="1500" />
                <label>Message:</label>
                <textarea name="message" rows="5" placeholder='Enter your message' required data-aos="fade-up" data-aos-duration="1500"></textarea>
                <Button type="submit" className='mx-auto m-4'> Submit</Button>
            </form>
        </div>
        
        </>
    )

}