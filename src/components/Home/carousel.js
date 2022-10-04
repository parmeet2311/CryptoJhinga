import React from "react";
// import { useState, useEffect } from "react";
import playbutton from "../../Assets/playbutton.png";
import { Container} from "react-bootstrap";
function Carousel(){
    return(
        <Container className="carousel-main">
        <h2 className="project-heading">
          Latest News
        </h2>
        <div className="carousel-component">

          <div className="cards-wrapper" >



            <div className="carouselcard">
              <div className="carousel-component">

                <img src={playbutton} className="carousel-image" />
                <strong className="card-text">JHINGA Token (USD₮) Launches on Kusama</strong>
                <p className="card-text">JHINGA Operations Limited (“JHINGA”), the company operating
                  the blockchain-enabled platform JHINGA to that powers the
                  largest stablecoin by market capitalisation of over US $82
                  billion, having added US $56 billion since January 1, 2021,
                  has launched JHINGA tokens (“USD₮”) on the Kusama network.
                  At launch, USD₮ will be deemed with. </p>
                <p className="card-text" ><strong>Read more</strong></p>
              </div>
            </div>
            <div className="carouselcard">
              <div className="carousel-component">
                <img src={playbutton} className="carousel-image" />
                <strong className="card-text">JHINGA Token (USD₮) Launches on Kusama</strong>
                <p className="card-text">JHINGA Operations Limited (“JHINGA”), the company operating
                  the blockchain-enabled platform JHINGA to that powers the
                  largest stablecoin by market capitalisation of over US $82
                  billion, having added US $56 billion since January 1, 2021,
                  has launched JHINGA tokens (“USD₮”) on the Kusama network.
                  At launch, USD₮ will be deemed with. </p>
                <p className="card-text" ><strong>Read more</strong></p>
              </div>
            </div>
            <div className="carouselcard">
              <div className="carousel-component">
                <img src={playbutton} className="carousel-image" />
                <strong className="card-text">JHINGA Token (USD₮) Launches on Kusama</strong>
                <p className="card-text">JHINGA Operations Limited (“JHINGA”), the company operating
                  the blockchain-enabled platform JHINGA to that powers the
                  largest stablecoin by market capitalisation of over US $82
                  billion, having added US $56 billion since January 1, 2021,
                  has launched JHINGA tokens (“USD₮”) on the Kusama network.
                  At launch, USD₮ will be deemed with. </p>
                <p className="card-text" ><strong>Read more</strong></p>
              </div>
            </div>
            <div className="carouselcard">
              <div className="carousel-component">
                <img src={playbutton} className="carousel-image" />
                <strong className="card-text">JHINGA Token (USD₮) Launches on Kusama</strong>
                <p className="card-text">JHINGA Operations Limited (“JHINGA”), the company operating
                  the blockchain-enabled platform JHINGA to that powers the
                  largest stablecoin by market capitalisation of over US $82
                  billion, having added US $56 billion since January 1, 2021,
                  has launched JHINGA tokens (“USD₮”) on the Kusama network.
                  At launch, USD₮ will be deemed with. </p>
                <p className="card-text" ><strong>Read more</strong></p>
              </div>
            </div>
            <div className="carouselcard">
              <div className="carousel-component">
                <img src={playbutton} className="carousel-image" />
                <strong className="card-text">JHINGA Token (USD₮) Launches on Kusama</strong>
                <p className="card-text">JHINGA Operations Limited (“JHINGA”), the company operating
                  the blockchain-enabled platform JHINGA to that powers the
                  largest stablecoin by market capitalisation of over US $82
                  billion, having added US $56 billion since January 1, 2021,
                  has launched JHINGA tokens (“USD₮”) on the Kusama network.
                  At launch, USD₮ will be deemed with. </p>
                <p className="card-text" ><strong>Read more</strong></p>
              </div>
            </div>




          </div>
        </div>
        <button style={{marginTop:"25px"}} className="warning-btn"> Read All News</button>
      </Container>
    )
}
export default Carousel;