import Link from 'next/link';
import { Navbar} from'react-bootstrap';
import './navbar.css';

function navbar() {


  return( 
    <div className="bgcolor1  sticky ">
        
        <Navbar className="bgcolor "  variant="light" collapseOnSelect expand="lg" >
            <div className="container">
  <Navbar.Brand href="#home"><img className="nav_img nav_siz"src="/static/img/navbar/chase&hunt_logo.png"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    
  <ul className="navbar-nav ml-auto fill" >
  <li className="nav-item active">
                            <Link href="/index"><a className="nav-link1 naveffect">Home</a></Link>
                        </li>
    
                        <li className="nav-item">
                            <Link href="/employer"><a className="nav-link1 naveffect" >Employer service</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/employer"><a className="nav-link1 naveffect" >Job search</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/knowus"><a className="nav-link1 naveffect" >Know us</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/trends"><a className="nav-link1 naveffect" >Trending</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact"><a className="nav-link1 naveffect" >Talk to us</a></Link>
                        </li>

                        
                        <li className="nav-item">
                        <button className="button " ><span><Link href="/Vacancy"><a className="nav-link2" >Recruit ?</a></Link> </span></button>
                        
                        </li>
                        <div className='b2'>
                        <li className="nav-item">
                        <button className="button1" ><span><Link href="/Login"><a className="nav-link2" ><img src="/static/img/fonticon/lock-solid.svg" width="15"height="18"></img>LOG IN </a></Link> </span></button>
                        
                        </li>
                        
                        </div>
                        
      </ul>
  </Navbar.Collapse>
  </div>
</Navbar>
       
    </div>
  );

}
export default navbar;