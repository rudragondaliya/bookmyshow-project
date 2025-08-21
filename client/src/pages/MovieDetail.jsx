import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { HiMiniUserCircle } from "react-icons/hi2";
import logo from "../assets/logo.png"

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:8100/api/movies/${id}`);
        setMovie(res.data);
        if (res.data.reviews) {
          setList(res.data.reviews);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [id]);

  
  const handleHover = (value) => setHover(value);
  const handleLeave = () => setHover(0);
  const handleDown = (value) => setStar(value);


  // const handleDelete = (reviewId) => {
  //   setList(list.filter((r) => r.id !== reviewId));
  // };

  if (!movie) {
    return (
      <div>
        <Navbar />
        <h3 className="text-center mt-5">Loading...</h3>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
   
<div
  className="banner position-relative text-white"
  style={{
    backgroundImage: `url(http://localhost:8100${movie.bannerUrl || movie.posterUrl})`,
    backgroundSize: "cover",      
    backgroundPosition: "center",  
    backgroundRepeat: "no-repeat", 
    aspectRatio: "16/9", 
    width: "100%",
    height: "600px",            
  }}
>

 
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
    }}
  ></div>

  <div className="container position-relative" style={{ zIndex: 2, paddingTop: "50px" }}>
    <div className="row align-items-center">
      {/* Poster */}
      <div className="col-md-3 mb-4 mb-md-0">
        <img
          src={`http://localhost:8100${movie.posterUrl}`}
          alt={movie.title}
          className="poster-img img-fluid rounded shadow"
          style={{ objectFit: "cover" }}
        />
        <p className="text-center mt-2 text-info">In cinemas</p>
      </div>

 
      <div className="col-md-9">
        <h1 className="fw-bold">{movie.title}</h1>

        <div className="d-flex align-items-center gap-3 my-3 box">
          <div className="rating-box">
            {[...Array(5).keys()].map((_, idx) => (
              <FaStar
                key={idx}
                size={20}
                color={hover > idx || star > idx ? "#FF355E" : "gray"}
                onMouseOver={() => handleHover(idx + 1)}
                onMouseLeave={handleLeave}
                onMouseDown={() => handleDown(idx + 1)}
              />
            ))}
          </div>
          <button className="btn btn-light btn-sm">Rate now</button>
          
        </div>

        <div className="mb-3">
          <span className="badge bg-light text-dark me-2">
            {movie.format || "2D"}
          </span>
          <span className="badge bg-light text-dark">{movie.language}</span>
        </div>

        <p>
          {movie.Duration}mins • {movie.genre}  •{" "}
          {new Date(movie.ReleaseDate).toLocaleDateString()}
        </p>

        <button className="btn btn-pink px-4 py-2 text-white">
          Book tickets
        </button>
      </div>
    </div>
  </div>
</div>

    <section className="abMovie p-5">
        <div className="container-fluid">
          <div className="ab-txt">
            <h3 className="text-black fw-semibold">About This Movie</h3>
            <p className="fw-medium fs-6 mt-3">
              {movie.description}
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="container mx-5 my-4">
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h2 className="fw-bold">Top reviews</h2>
    <a href="#" className="text-danger fw-bold">74.3K reviews ›</a>
  </div>
  <p className="text-muted">Summary of 74.3K reviews.</p>
  {/* Tags */}
  <div className="mb-4">
    <span className="badge bg-light text-danger border me-2">#Blockbuster <span className="text-dark">35193</span></span>
    <span className="badge bg-light text-danger border me-2">#GreatActing <span className="text-dark">34278</span></span>
    <span className="badge bg-light text-danger border me-2">#SuperDirection <span className="text-dark">25351</span></span>
    <span className="badge bg-light text-danger border me-2">#Rocking <span className="text-dark">22478</span></span>
    <span className="badge bg-light text-danger border me-2">#WellMade <span className="text-dark">18023</span></span>
  </div>
  {/* Reviews */}
  <div className="row g-3">
    {/* Review Card */}
    <div className="col-md-6">
      <div className="card border rounded-3 p-4">
        <div className="d-flex align-items-center mb-2">
          <HiMiniUserCircle className="mb-3 me-2"  size={30}/>
          <div>
            <h6 className="mb-0">Rudra</h6>
            <small className="text-muted">Booked on <img src={logo} alt="BookMyShow" className="img-fluid mt-1" style={{height: 30}} /></small>
          </div>
          <div className="ms-auto text-danger fw-bold">★ 10/10</div>
        </div>
        <p className="mb-2 fw-bold text-dark">#SuperDirection #GreatActing #Blockbuster...</p>
        <div className="d-flex justify-content-between align-items-center text-muted">
          <div>
            <i className="bi bi-hand-thumbs-up me-1" />4.3K
            <i className="bi bi-hand-thumbs-down ms-3" />
          </div>
          <small>6 Days ago</small>
          <i className="bi bi-share" />
        </div>
      </div>
    </div>
    {/* Review Card */}
    <div className="col-md-6">
      <div className="card border rounded-3 p-4">
        <div className="d-flex align-items-center mb-2">
          <HiMiniUserCircle  className="mb-3 me-2" size={30}/>
          <div>
            <h6 className="mb-0">Meet</h6>
            <small className="text-muted">Booked on <img src={logo} className="mt-1" alt="BookMyShow" style={{height:30}} /></small>
          </div>
          <div className="ms-auto text-danger fw-bold">★ 2/10</div>
        </div>
        <p className="mb-2">Week story... poor direction I want my money back 😭😭</p>
        <div className="d-flex justify-content-between align-items-center text-muted">
          <div>
            <i className="bi bi-hand-thumbs-up me-1" />3.6K
            <i className="bi bi-hand-thumbs-down ms-3" />
          </div>
          <small>5 Days ago</small>
          <i className="bi bi-share" />
        </div>
      </div>
    </div>
  </div>
 

  

  <div className="row g-3 mt-4">

    <div className="col-md-6">
      <div className="card border rounded-3 p-4">
        <div className="d-flex align-items-center mb-2">
          <HiMiniUserCircle className="mb-3 me-2"  size={30}/>
          <div>
            <h6 className="mb-0">Jesu</h6>
            <small className="text-muted">Booked on <img src={logo} alt="BookMyShow" className="img-fluid mt-1" style={{height: 30}} /></small>
          </div>
          <div className="ms-auto text-danger fw-bold">★ 10/10</div>
        </div>
        <p className="mb-2 fw-bold text-dark">#SuperDirection #GreatActing #Blockbuster...</p>
        <div className="d-flex justify-content-between align-items-center text-muted">
          <div>
            <i className="bi bi-hand-thumbs-up me-1" />4.3K
            <i className="bi bi-hand-thumbs-down ms-3" />
          </div>
          <small>6 Days ago</small>
          <i className="bi bi-share" />
        </div>
      </div>
    </div>
    
    <div className="col-md-6">
      <div className="card border rounded-3 p-4">
        <div className="d-flex align-items-center mb-2">
          <HiMiniUserCircle  className="mb-3 me-2" size={30}/>
          <div>
            <h6 className="mb-0">Raj</h6>
            <small className="text-muted">Booked on <img src={logo} alt="BookMyShow" className="mt-1" style={{height: 30}} /></small>
          </div>
          <div className="ms-auto text-danger fw-bold">★ 2/10</div>
        </div>
        <p className="mb-2">Week story... poor direction I want my money back 😭😭</p>
        <div className="d-flex justify-content-between align-items-center text-muted">
          <div>
            <i className="bi bi-hand-thumbs-up me-1" />3.6K
            <i className="bi bi-hand-thumbs-down ms-3" />
          </div>
          <small>5 Days ago</small>
          <i className="bi bi-share" />
        </div>
      </div>
    </div>
  </div>




</section>


      

<footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">
    
    <div className="row text-center mb-4">
      <div className="col-md-4 mb-3">
        <i className="bi bi-headset fa-2x mb-2" />
        <h6>24/7 CUSTOMER CARE</h6>
      </div>
      <div className="col-md-4 mb-3">
        <i className="bi bi-receipt-cutoff fa-2x mb-2" />
        <h6>RESEND BOOKING CONFIRMATION</h6>
      </div>
      <div className="col-md-4 mb-3">
        <i className="bi bi-envelope-paper-fill fs-large fa-2x mb-2" />
        <h6>SUBSCRIBE TO THE NEWSLETTER</h6>
      </div>
    </div>
   
    <div className="row">
      <div className=" mb-3">
        <h6 className="fw-normal">MOVIES NOW SHOWING IN MUMBAI</h6>
        <p>War 2 | Mahavatar Narsimha | Coolie: The Powerhouse (Hindi) | Coolie | Weapons | Saiyaara | F1: The Movie | Son of Sardaar 2 | Su From So | Dhadak 2</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normol">UPCOMING MOVIES IN MUMBAI</h6>
        <p>The Case Diary | Tribanadhari Barbarik | Better Half Chi Love Story | Afterburn | Taarikh | Bring Her Back | Nobody 2 | Son of Muthanna | Love Matteru | Indra</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normal">MOVIES BY GENRE</h6>
        <p>Drama Movies | Action Movies | Comedy Movies | Thriller Movies | Family Movies | Romantic Movies | Animation Movies | Horror Movies | Classic Movies | Mystery Movies</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normal">MOVIES BY LANGUAGE</h6>
        <p>Movies in Hindi | Movies in English | Movies in Gujarati | Movies in Telugu | Movies in Konkani | Movies in Portuguese | Movies in Khasi | Movies in Tulu | Movies in Sindhi | Movies in Japanese</p>
      </div>
    </div>
    <hr className="border-secondary" />
  
    <div className="row">
      <div className=" mb-3">
        <h6 className="fw-normal">SPORTS EVENTS IN MUMBAI</h6>
        <p>Running | Chess | Cycling | Sailing | Walking | Kabaddi | Baseball | Cricket | Horse Race | Boat Race</p>
      </div>
      <div className="mb-3">
        <h6 className="fw-normal">EVENTS IN TOP CITIES</h6>
        <p>Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</p>
      </div>
      <div className="mb-3">
        <h6 className="fw-normal">CINEMAS IN TOP CITIES</h6>
        <p>Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normal">PLAYS IN TOP CITIES</h6>
        <p>Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>
      </div>
    </div>
    <div className="row mt-3">
      <div className=" mb-3">
        <h6 className="fw-normal">COUNTRIES</h6>
        <p>Indonesia | Singapore | Sri Lanka | West Indies</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normal">HELP</h6>
        <p>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy</p>
      </div>
      <div className=" mb-3">
        <h6 className="fw-normal">BOOKMYSHOW EXCLUSIVES</h6>
        <p>Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</p>
      </div>
    </div>
    <hr className="border-secondary" />
  
    <div className="row text-center">
      <div className="col-12 mb-3">
        <img src="/images/logo.png" alt="BookMyShow" style={{height: 80}} />
      </div>
      <div className="col-12">
        <a href="#" className="text-light mx-2"><i className="fab fa-facebook fa-lg" /></a>
        <a href="#" className="text-light mx-2"><i className="fab fa-x-twitter fa-lg" /></a>
        <a href="#" className="text-light mx-2"><i className="fab fa-instagram fa-lg" /></a>
        <a href="#" className="text-light mx-2"><i className="fab fa-youtube fa-lg" /></a>
        <a href="#" className="text-light mx-2"><i className="fab fa-pinterest fa-lg" /></a>
        <a href="#" className="text-light mx-2"><i className="fab fa-linkedin fa-lg" /></a>
      </div>
    </div>
   
    <div className="row mt-3">
      <div className="col text-center">
        <small>
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.  
          The content and images used on this site are copyright protected and copyrights vests with the respective owners.  
          The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.  
          Unauthorized use is prohibited and punishable by law.
        </small>
      </div>
    </div>
  </div>
</footer>

  

    </>
  );
};

export default MovieDetail;
