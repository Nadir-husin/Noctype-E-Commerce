import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';
import './form.css'
export default function LoginForm() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }



    //handle login submit
    function handleLoginSubmit(e){
        e.preventDefault();
        const storedEmail = localStorage.getItem("Email");
        const storedPassword = localStorage.getItem("Password");
        if(storedEmail === email && storedPassword === password)  {
            window.location.href = '/';
        }
        else{
            alert("Invalid email or password");
        }
    }
    return (

        <>
            <div>
                <form className="form-container" data-aos ='fade-up' data-aos-duration="1000">
                    <h2 className='fs-1'>Login</h2>
                    <label  style={{marginTop:'20px'}}>Email address</label>
                    <input type="email" placeholder="name@examaple.com" required value={email} onChange={handleEmailChange} />
                    <label>Password</label>
                    <input type="password" placeholder="password" required value={password} onChange={handlePasswordChange} />
                    <p>Not Here ? <Nav.Link href='./register'>Register</Nav.Link></p>
                    <Button type="submit" style={{padding: '4px 25px' , margin:'10px'}} onClick={handleLoginSubmit}>Login</Button>

                </form>

            </div>
        </>

    );
}