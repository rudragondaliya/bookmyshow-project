import React from 'react';
import { FaBell } from "react-icons/fa";
import profile from '../assets/profile.png'

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg px-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
        
       
     
      </ul>
      <form className="d-flex align-items-center mx-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <div className="icon-set d-flex align-items-center">
          <FaBell className='me-2' size={25} color='#e94752' />
          <img src={profile} alt=""  height={35} />
          <h6 className='mt-2 mx-2'>Rudra</h6>
        </div>
       
       
      </form>
    </div>
  </div>
</nav>
 
    </>
  );
}

export default Navbar;
