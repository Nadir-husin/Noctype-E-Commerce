import { useState } from "react";
import { Button } from "react-bootstrap";
import './checkout.css';

export default function Checkoutform (){
    const [email , setEmail] = useState("");
    const [address , setAdress] = useState("");
    const [country , setCountry] = useState("");
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");


    const [state, setState] = useState("");
        const countryStates = {
    egypt: ["Cairo", "Giza", "Alexandria", "Aswan"],
    saudi: ["Riyadh", "Jeddah", "Dammam"],
    uae: ["Dubai", "Abu Dhabi", "Sharjah"],
    kuwait: ["Kuwait City"],
    qatar: ["Doha"],
    usa: ["California", "Texas", "New York", "Florida"],
    uk: ["London", "Manchester", "Liverpool"],
    germany: ["Berlin", "Munich", "Hamburg"],

 };




    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    
    function handleAddressChange(e){
        setAdress(e.target.value);
    }



return(
        <>
        
                <form className="checkoutform-container" data-aos ='fade-up' data-aos-duration="1000">
                    <h2 className='fs-1 '>Billing Address</h2>
                    <div className="d-flex flex-column flex-sm-row  gap-3">
                        <div>
                        <label >First Name</label>
                        <input type="text" placeholder="John " required value={firstName} onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} />
                        </div>
                        <div>
                        <label >Last Name</label>
                        <input type="text" placeholder="Doe " required value={lastName} onChange={(e)=>{
                            setLastName(e.target.value)
                        }} />
                        </div>
                    </div>
                    <label  style={{marginTop:'20px'}} className="">Email address</label>
                    <input type="email" placeholder="name@examaple.com" required value={email} onChange={handleEmailChange} />
                    <label>Address</label>
                    <input type="text" placeholder="1234 Main st" required value={address} onChange={handleAddressChange} />
                    <label>Address 2 <span>(Optional)</span></label>
                    <input type="text" placeholder="Apartment Or Suite"  value={address} onChange={handleAddressChange} />
                        <div className="d-flex flex-column flex-sm-row  gap-3 mt-2">
                            {/* country */}
                            <div>
                            <label>Country</label>
                            <select
                            required
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                                setState("");
                            }}
                            >
                                <option value="">Select Country</option>
                                <option value="egypt">Egypt</option>
                                <option value="saudi">Saudi Arabia</option>
                                <option value="uae">UAE</option>
                                <option value="kuwait">Kuwait</option>
                                <option value="qatar">Qatar</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="germany">Germany</option>
                            </select>
                            </div>


                            {/* state */}
                            <div>
                                <label>State</label>
                                <select
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                disabled={!country}
                                >
                                <option value="">Select State</option>

                                {country &&
                                    countryStates[country].map((stateName) => (
                                    <option key={stateName} value={stateName}>
                                        {stateName}
                                    </option>
                                    ))}
                                </select>
                            </div>



                        <div>
                        <label >Zip</label>
                        <input type="text" required placeholder="1234" />
                        </div>
                    </div>
                                <hr/>

                                    {/* Payment */}
                    <h2 className='fs-1 '>Payment</h2>

                        <div className="d-flex flex-column flex-sm-row  gap-3">
                        <div>
                        <label >Name on Card</label>
                        <input type="text" placeholder="Full Name on Card " required />
                        </div>
                        <div>
                        <label >Credit Card Number</label>
                        <input type="text" placeholder="1234-1234-1234-1234" required />
                        </div>
                    </div>
                        <div className="d-flex flex-column flex-sm-row  gap-3">
                        <div>
                        <label >Expiration</label>
                        <input type="text" placeholder="10/27" required />
                        </div>
                        <div>
                        <label >CVV</label>
                        <input type="text" placeholder="123" required />
                        </div>
                    </div>
                    <Button type="submit" style={{padding: '4px 25px' , margin:'10px'}} >Continue To Checkout</Button>

                </form>

        </>

)
}
