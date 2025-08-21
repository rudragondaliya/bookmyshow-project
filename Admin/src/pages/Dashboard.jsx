import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { TbMovie } from "react-icons/tb";
import { MdSlideshow } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BarChart } from '@mui/x-charts/BarChart';
import { MdStars } from "react-icons/md";
import { useSelector } from 'react-redux';


const Dashboard = () => {

  const {movies} = useSelector((state)=> state.movies)
  const totalMovies = movies?.length || 0;

  return (
    <>
      <div className="d-flex ">
        <Sidebar/>
        <div className="flex-grow-1">
          <div className="main-pannel ">
            <Navbar/>


            {/* Summary-cards */}
            <div className="container-fluid p-4">
              <div className="row">
                <div className="col-3">
                  <div className="card shadow-sm ">
                     <h5 className='ms-3 mt-4'>Total Bookings</h5>
                     <div className="card-text">
                      <h2>{100}</h2>
                      <div className="icon-box-1">
                        <i class="bi bi-ticket-fill"></i>
                        </div>
                        </div>         
                  </div>
                </div>
                <div className="col-3">
                  <div className="card shadow-sm  ">
                     <h5 className='ms-3 mt-4'>Total Movies</h5>
                     <div className="card-text">
                      <h2>{totalMovies}</h2>
                      <div className="icon-box-2">
                        <TbMovie size={30} color='#800080' />
                      </div>
                     </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card shadow-sm ">
                     <h5 className='ms-3 mt-4'>Total Shows</h5>
                     <div className="card-text">
                      <h2>{123}</h2>
                      <div className="icon-box-3">
                         <MdSlideshow size={30} />
                      </div>
                     </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card shadow-sm">
                     <h5 className='ms-3 mt-4'>Total Revenue</h5>
                     <div className="card-text">
                      <h2>{<FaIndianRupeeSign size={30}/>}30000</h2>
                      <div className="icon-box-4">
                        <FaIndianRupeeSign size={30} color='#0c900cff' />
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* summary-cards-end */}

            {/* charts */}

            <div className="container-fluid p-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="chart shadow p-4 rounded-5">
                    <h5>Monthly Revenue</h5>
                     <BarChart
                      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                      height={350}
                    />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="actions p-4 shadow">
                   <div className="title">
                    <h5 className='text-black'><MdStars size={24} color='#1de41dff' /> Top Movies</h5>
                   </div>
                  </div>
                </div> */}

                <div className="col-md-4">
                <div className="actions p-4 shadow rounded bg-white">
                  <div className="title d-flex align-items-center mb-3">
                    <MdStars size={24} color="#1de41dff" className="me-2" />
                    <h5 className="text-black fw-bold mb-0">Top Movies</h5>
                  </div>

            {/* Movies List */}
            <div className="top-movies-list">
              {movies.slice(0, 5).map((movie) => (
                <div key={movie._id} className="d-flex align-items-center p-2 rounded hover-shadow">
                  {/* Movie Poster */}
                  <img
                    src={`http://localhost:8100${movie.posterUrl}`}
                    alt={movie.title}
                    style={{
                      width: "50px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    className="me-3"
                  />

                  {/* Movie Info */}
                  <div>
                    <h6 className="mb-1 fw-semibold">{movie.title}</h6>
                    <span className="text-muted small">{`${movie.language}`}</span>,
                    <span className="text-muted small mx-2">{`${movie.genre}`}</span>

                  </div>
                </div>
                  ))}
                </div>
              </div>
            </div>

              </div>
            </div>

            {/* Booking Table */}

            <div className="container-fluid p-5 shadow-">
              <div className="row">
                <div className="col">
                   <h3>Recent Bookings</h3>
                  <table className="table table-striped table-hover">
                   <thead>
                    <tr>
                      <th>Sr.no</th>
                      <th>Poster</th>
                      <th>title</th>
                      <th>ReleaseDate</th>
                      <th>Language</th>
                      <th>Genre</th>
                    </tr>
                    </thead>
                    <tbody>
                      {movies.map((val,idx)=>{
                        const {posterUrl,title,ReleaseDate,language,genre} = val;
                        return(
                          <tr key={val._id || val.id || idx}>
                            <td>{idx+1}</td>
                            <td>
                              <img src={`http://localhost:8100${val.posterUrl}`} alt={val.title}
                               height={40}
                               width={120}
                               style={{objectFit:"cover"}}
                               className='rounded-2'
                              />
                            </td>
                            <td>{val.title}</td>
                            <td>{val.ReleaseDate}</td>
                            <td>{val.language}</td>
                            <td>{val.genre}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            

          </div>
           
        </div>
      </div>

    </>
  );
}

export default Dashboard;
