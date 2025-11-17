import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

// material ui
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';


function CollapsibleExample() {
  const [LoggedinUser, setLoggedinUser] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  function fetchUserInfo() {
    const storedName = localStorage.getItem("FullName");
    if (storedName){
      setLoggedinUser(true);
      setUserInfo(storedName);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='navbar-container'>
        
        {/* Use Link instead of href */}
        <Navbar.Brand as={Link} to="/" style={{fontWeight : "bold", fontSize : "25px", color:"#0A2647"}}>
          Noctype
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mx-auto text-center links" style={{color:"#0A2647"}}>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <div className="d-flex ms-auto gap-2 nav-buttons align-items-center justify-content-center">

            <Nav.Link 
              as={Link} 
              to="/login" 
              className={LoggedinUser ? "is-disabled" : "" }
            >
              <Button className='btn'><LoginIcon/> Login</Button>
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/register" 
              className={LoggedinUser ? "is-disabled" : "" }
            >
              <Button className='btn'><PersonAddAltIcon/> Register</Button>
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <Button className='btn'><ShoppingCartIcon/> Cart</Button>
            </Nav.Link>

            <h3 className={LoggedinUser ? "user" : "is-disabled"}>
              <PersonIcon /> <p>{userInfo}</p>
            </h3>

          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
