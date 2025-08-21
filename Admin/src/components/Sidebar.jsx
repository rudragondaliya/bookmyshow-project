import React from 'react';
import logo from  '../assets/logo.png'
import { MdDashboardCustomize } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { SiCinema4D } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      
               <div className="sidebar ">
               <div className="logo-text text-center mt-2">
                <img src={logo} alt="" height={70} />
               </div>
               <div className="nav-links">
                <h6 className='text-secondary fw-bold mb-3 sub-head'>MENU</h6>
                 <div className='link-btn text-start px-4 py-3 '>
                    <Link to="/" className='text-decoration-none'>
                        <span className='mx-2'><MdDashboardCustomize  size={20}/></span>  Dashboard</Link></div>
                 <div className='link-btn text-start px-4 py-3'>
                    <Link to="/movies" className='text-decoration-none'>
                        <span className='mx-2'><MdLocalMovies size={20} /></span>Movies</Link></div>
                        <div className='link-btn text-start px-4 py-3'>
                    <Link to="/moviestables" className='text-decoration-none'>
                        <span className='mx-2'><MdLocalMovies size={20} /></span>Movies Table</Link></div>
                
               </div>
               </div>
            </div>
  );
}

export default Sidebar;
