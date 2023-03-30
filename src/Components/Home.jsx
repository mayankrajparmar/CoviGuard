import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"
import dose from "./Images/dose.svg";

function Home() {
  return ( 
    <>
     <section id="header" class="d-flex align-items-center">
      <div class="container-fluid nav_bg">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row">
            <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Historic &amp; Unparalleled Achievement! <br />India’s Glorious Journey of  <strong class="brand-name">200 Crore vaccinations</strong></h1>
              <h2 className="my-3">
                "India is set to defeat Covid-19. Every Indian is making it possible." - PM Narendra Modi 
              </h2>
              <div class="mt-3">
                <Link to="/slot" class="btn-get-started">Book Your Slot</Link>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 header-img">
              <img src={dose} class="img-fluid home-img" alt="home-img"/>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Home
