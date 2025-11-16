import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';
import './form.css'
export default function Register() {
        const[fullName ,setFullName] = useState("");
        const [email , setEmail] = useState("");
        const [password , setPassword] = useState("");
        
    function handleFullNameChange(e){
            setFullName(e.target.value);
    }
     function handleEmailChange(e){
            setEmail(e.target.value);
     }
        
     function handlePasswordChange(e){
            setPassword(e.target.value);
     }


     //handle register submit 
     function handleRegisterSubmit(e){
            e.preventDefault();

            localStorage.setItem("FullName" , fullName);    
            localStorage.setItem("Email" , email);
            localStorage.setItem("Password" , password);
            window.location.href = './'; 

     }
    return (

        <>
            <div>
                <form className="form-container" data-aos ='fade-up' data-aos-duration="1000">
                    <h2 className='fs-1'>Register</h2>
                    <label style={{marginTop:'20px'}} >Full Name</label>
                    <input type="text" placeholder="Enter Your Full Name" required  value={fullName} onChange={handleFullNameChange} />
                    <label >Email address</label>
                    <input type="email" placeholder="name@examaple.com" required  value={email} onChange={handleEmailChange}/>
                    <label>Password</label>
                    <input type="password" placeholder="password" required value={password} onChange={handlePasswordChange} />
                    <p>Already has an account ? <Nav.Link href='./login'>Login</Nav.Link></p>
                    <Button type="submit" style={{padding: '4px 25px' , margin:'10px'}} onClick={handleRegisterSubmit}> Register</Button>
                </form>

            </div>
        </>

    );
}