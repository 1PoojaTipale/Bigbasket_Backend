
import{Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function Navbar_component()
{
    return(<div>
 <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">BIGBASKET</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link>
             <Nav.Link href="/Register">Register</Nav.Link>
            
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </NavDropdown>
    
    </Nav>
            
  </Navbar.Collapse>
</Navbar>
</div>
    );
}
export default Navbar_component;