
import './login.css';
import Link from 'next/link';

function Login() {
   
    return (
     
        <div className="Login " id="Login">
            <div className="container lcon">
                
         <form className="border border-light p-5">
<div className="container p-1">
<h1 className="h4 mb-4 text-center">Sign in</h1>
<div className="llin  bg-danger"></div>
</div>



<input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

<input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

<div className="d-flex justify-content-between">
    <div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
            <label className="custom-control-label" >Remember me</label>
        </div>
    </div>
    <div>
        <a href="">Forgot password?</a>
    </div>
</div>

<Link href="/userdashbd"><button className="btn btn-danger btn-block my-4" type="submit">Sign in</button></Link>

<div className="text-center">
    <p>Not a member?
    <Link  href="/register"><a className="nav-link2">Register</a></Link>
    </p>

    
</div>
</form>

</div>
        </div>
       
    );
  }
  
  export default Login;



