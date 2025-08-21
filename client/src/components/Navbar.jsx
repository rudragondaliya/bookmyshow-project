import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";


const Navbar = () => {

    const [icon,setIcon] = useState(true);
    const [isSignUp, setIsSignUp] = useState(true);

    const handleIcon=()=>{
        setIcon(false)
    }
  
    const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
  
    setIsSignUp(false); 
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
   
  };

  return (
    <>
            <nav className="navbar navbar-expand-lg">
        <div className="container p-0">
            <a className="navbar-brand p-0 " href="#">
                <img src={logo} width={130} alt=""  className='img-fluid mt-2'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form className="d-flex searchBar " role="search">
                {icon && (
                  <IoIosSearch className='searchIcon' onClick={handleIcon} />
                )}
            
                <input className="form-control me-2 inputBar" onFocus={()=> setIcon(false)} onBlur={()=> setIcon(true)}  type="search" placeholder="Search for Movies, Events, Plays, Sports and Activites" aria-label="Search" />
                
            </form>

           
                <div className='ms-auto '>
                <a type="" className="text-black text-decoration-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Navsari <MdOutlineArrowDropDown size={30} className='mb-1' />
                </a>
          
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        ...
                        </div>
                     
                    </div>
                    </div>
                </div>
                </div>  


               
            <button
              type="button"
              className="btn btn-sm signBtn shadow-sm mx-3"
              data-bs-toggle="modal"
              data-bs-target="#authModal"
            >
              Sign In
            </button>

      
      <div
        className="modal fade"
        id="authModal"
        tabIndex={-1}
        aria-labelledby="authModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="authModalLabel">
                {isSignUp ? "Sign Up" : "Login"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {isSignUp ? (
                <form onSubmit={handleSignUpSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                  <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsSignUp(false)}
                    >
                      Login
                    </span>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                  <p className="mt-3 text-center">
                    Don't have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
                

                

            </div>
        </div>
        </nav>

        

        <div className="links-menu bg-body-tertiary ">
        <div className="container d-flex align-items-center justify-content-between">
          <ul className='list-unstyled d-flex align-items-center mt-2 gap-3'>
            <li>Movies</li>
            <li>Stream</li>
            <l>Events</l>
            <li>Plays</li>
            <li>Sports</li>
            <li>Activites</li>
          </ul>

          <ul className='list-unstyled d-flex align-items-center mt-2 gap-3'>
            <li>ListYourShow</li>
            <li>Corporates</li>
            <li>Offers</li>
            <li>Gift Cards</li>
          </ul>
  
        </div>
      </div>

 
    </>
  );
}

export default Navbar;
