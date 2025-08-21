import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import banner1 from '../assets/banner-1.avif'
import banner2 from '../assets/banner-2.avif'
import banner3 from '../assets/banner-3.avif'
import Moviecard from '../components/Moviecard';
import axiosInstances from '../api/axiosInstances';
import smallBanner from '../assets/samll-banner.avif'
import MovieEvent from '../components/movieEvent';
import premireLogo from "../assets/premiere-logo.avif"
import MoviePremiere from '../components/MoviePremiere';
import MovieLaughter from '../components/MovieLaughter';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axiosInstances.get("/movies");
        setMovies(res.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);


    const recommended = movies.filter((m) => m.category?.includes("recommended"));
    const Events = movies.filter((e) => e.category?.includes("Events"));
    const premiere = movies.filter((p) => p.category?.includes("premiere"));
    const Laughter = movies.filter((l) => l.category?.includes("Laughter"));

  return (
    <>
      <Navbar/>

      <div className="container-fluid gx-0">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>

    
      
      <section className='recommeneded Movies p-2 mt-5'>
        <div className="container">
          <h3>Recommended Movies</h3>
          <div className="row mb-5">
        {recommended.map((movie) => (
          <div className="col-md-3 mb-4" key={movie._id}>
            <Moviecard movie={movie} />
          </div>
        ))}
      </div>
        </div>
      </section>

      <section className='smallBanner '>
        <div className="container">
          <img src={smallBanner} alt="" width="100%" />
        </div>
      </section>

   

       <section className='recommeneded Movies p-2 mt-5'>
        <div className="container">
          <h3>The Best of Live Events</h3>
          <div className="row mb-5">
        {Events.map((movie) => (
          <div className="col-md-2 mx-1 mb-4 mt-3" key={movie._id}>
            <MovieEvent movie={movie} />
          </div>
        ))}
      </div>
        </div>
      </section>


    

      <section className='premiere'>
        <div className="container">
         <div className="premiere-logo">
          <img src={premireLogo} alt="" width="100%"/>
         </div>
         <div className="premeire-title lh-1">
          <h2 className='text-white mt-4'>Premieres</h2>
          <small className='text-white'>Brand new releases every Friday</small>
         </div>
          <div className="row mb-5">
        {premiere.map((movie) => (
          <div className="col-md-2 mx-3 mb-4 mt-3" key={movie._id}>
            <MoviePremiere movie={movie} />
          </div>
        ))}
      </div>
        </div>
      </section>

    

        <section className='laughter p-2 mt-5'>
        <div className="container">
          <h3>Laughter Therapy</h3>
          <div className="row mb-5">
        {Laughter.map((movie) => (
          <div className="col-md-2 mx-3 mb-4 mt-3" key={movie._id}>
            <MovieLaughter movie={movie} />
          </div>
        ))}
      </div>
        </div>
      </section>


    <footer className="bg-body-tertiary text-center">

  <div className="container p-4 pb-0">
  
    <section className="mb-4">
     
      <a data-mdb-ripple-init className="btn p-2 text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><FaFacebook size={30}/></a>
  
      <a data-mdb-ripple-init className="btn text-white btn-floating p-2  m-1" style={{backgroundColor: '#1d1f20ff'}} href="#!" role="button"><BsThreads size={30} /></a>
      
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 p-2" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><FaYoutube size={30} /></a>
     
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 p-2" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><FaInstagram  size={30}/></a>
    </section>
  
  </div>
  

  <div className="text-center text-white p-4" style={{backgroundColor: '#0b0909ff'}}>
    © 2020 Copyright:
    <Link className="text-white" to="/">
     BookMyShow
    </Link>
  </div>

</footer>




    </>
    
    
  );
}

export default Home;
