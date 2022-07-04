import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FAQ from "./faq.js";

import home2 from "../../Assets/Images/home-2.png";
import homeLogo from "../../Assets/Images/Group.png";
import part1 from "../../Assets/Images/part1.png";
import map from "../../Assets/Images/map.png";
import investor from "../../Assets/Images/investor.png";
import merchants from "../../Assets/Images/merchants.png";
import exchanges from "../../Assets/Images/exchanges.png";
import purchase from "../../Assets/Images/purchase.png";
import stable from "../../Assets/Images/stable.png";
import trade from "../../Assets/Images/trade.png";
import ProjectCard from "../Projects/ProjectCards";
import ProjectCard2 from "../Projects/ProjectCard-2";
import 'bootstrap/dist/css/bootstrap.css';

{/* <FontAwesomeIcon icon="fa-light fa-angle-right" /> */ }


function Home2() {

  const [faqs, setfaqs] = useState([
    {
      question: 'What is JHINGA?',
      answer: 'Launched in 2014, JHINGA is a blockchain-enabled platform designed to facilitate the use of fiat currencies in a digital manner. JHINGA works to disrupt the conventional financial system via a more modern approach to money. JHINGA has made headway by giving customers the ability to transact with traditional currencies across the blockchain, without the inherent volatility and complexity typically associated with a digital currency.As the first blockchain- enabled platform to facilitate the digital use of traditional currencies(a familiar, stable accounting unit), JHINGA has democratised cross - border transactions across the blockchain.',
      open: true
    },
    {
      question: 'How do JHINGA tokens work?',
      answer: 'sample1',
      open: false
    },
    {
      question: 'What are JHINGA tokens?',
      answer: 'sample2',
      open: false
    },
    {
      question: 'What currencies and commodities does JHINGA support?',
      answer: 'sample3',
      open: false
    },
    {
      question: 'Who can use JHINGA tokens?',
      answer: 'sample4',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }






  const [mounted, setMounted] = useState(true);
  return (
    <Container fluid className="home-about-section" id="about">

      <Container className="home-content">
        <Row className="homeComponents" style={{ justifyContent: "center" }}>
          <Col md={7} sm={12} xs={12} className="home-header">

            <Row className="jhinga-Rs-Row">
              <img src={home2} className="jhinga-Rs img-fluid" />
              <h2 style={{ paddingBottom: 8, color: "black" }} className="heading">
                Jhinga Token
              </h2>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <p>Welcome t0 Crypto JHINGA, your currency for the blockchain universe. A reliable Stablecoin which is perpetually pegged to the INR.</p>
              </div>
            </Row>
          </Col>

          <Col md={5} sm={5} xs={2} style={{ paddingBottom: 20 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="project-section">
        {/* <Particle /> */}
        <Container>
          <h2 className="project-heading">
            Your Options to BUY/SELL <br /> <strong className="purple"> JHINGA </strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4}  className="project-card">
              <ProjectCard
                imgPath={purchase}
                isBlog={false}
                title="Purchase JHINGA with cash"
                description="Purchase 1:1 with USD via wire transfer, or 
              top upvour JHINGA cash wallet with other 
              currencies to exchange to JHINGA."
                link=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={stable}
                isBlog={false}
                title="Stablecoins to JHINGA"
                description="Zero transaction fee for BUSD/USDT.
              usoc/ruso. Tush/ruso pax/RUSD."
                link=""
              />
            </Col>



            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={trade}
                isBlog={false}
                title="Trade JHINGA with Crypto"
                description="Support multiple trading pairs to trade 
              other coins to BUSD.
              "
                link=""
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="part4" style={{ backgroundImage: { map } }}>
        <Row className="homeComponents">
          <Col md={5} sm={5} xs={2} style={{ paddingBottom: 20 }}>
            <img src={part1} alt="home pic" className="img-fluid" />
          </Col>
          <Col md={7} sm={12} xs={12} className="home-header">

            <h2 style={{ paddingBottom: 8, color: "black" }} className="heading">
              100% backed and fully transparent
            </h2>

            <div style={{ paddingLeft: 50, textAlign: "left" }}>
              <p>All JHINGA tokens (USD₮) are pegged at 1-to-1 with a
                matching fiat currency and are backed 100% by
                JHINGA’s reserves. We publish a daily record of the
                current total assets and reserves.</p>
            </div>
          </Col>


        </Row>
      </Container>

      <Container fluid className="project-section-3">
        <Container>
          <h2 className="project-heading">
            Who is it for ?
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card-1">
              <ProjectCard2
                md={6}
                isBlog={false}
                title="100% backed and fully transparent"
                description="All JHINGA tokens (USD₮) are pegged 
                at 1-to-1 with a matching fiat 
                currency and are backed 100% by 
                JHINGA’s reserves. We publish a daily 
                record of the current total assets and 
                reserves."
                link=""
              />
              {/* <Row>
                <Col md={6}>
                  <button>hello</button>
                </Col>
                <Col md={6}>
                  <button>world</button>
                </Col>
              </Row> */}
            </Col>


            <Col md={6} className="project-card-2">
              <ProjectCard2
                isBlog={false}
                md={6}
                title="100% backed and fully transparent"
                description="All JHINGA tokens (USD₮) are pegged 
                at 1-to-1 with a matching fiat 
                currency and are backed 100% by 
                JHINGA’s reserves. We publish a daily 
                record of the current total assets and 
                reserves."
                link=""
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="project-section-2">
        {/* <Particle /> */}
        <Container>
          <h2 className="project-heading">
            Who is it for ?
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={investor}
                isBlog={false}
                title="JHINGA for Investers"
                description="JHINGA tokens offer exceptional liquidity 
              on tier one exchanges giving traders the 
              ability to take advantage of arbitrage 
              opportunities in the fastest time possible."
                link=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={merchants}
                isBlog={false}
                title="JHINGA for Merchants"
                description="For merchants, integrating JHINGA tokens 
              opens up an array of opportunities for 
              consumers to purchase products and 
              services."
                link=""
              />
            </Col>



            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={exchanges}
                isBlog={false}
                title="JHINGA for Exchanges"
                description="JHINGA tokens play a pivotal role in the 
              digital token ecosystem and are the most 
              actively traded in terms of 24-hour 
              volume."
                link=""
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="faq-main">
        <h3 style={{ color: "black" }}>FAQ's</h3>

        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <button className="faq-button">Read All FAQs</button>


      </Container>

      <Container className="carousel-main">
        <h2 className="project-heading">
          Latest News
        </h2>
        <div className="carousel-component">

          <div className="cards-wrapper" >



            <div className="carouselcard">
              <div className="carousel-component">

                <img src="https://picsum.photos/300/200" className="carousel-image" />
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
                <img src="https://picsum.photos/300/200" className="carousel-image" />
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
                <img src="https://picsum.photos/300/200" className="carousel-image" />
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
                <img src="https://picsum.photos/300/200" className="carousel-image" />
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
                <img src="https://picsum.photos/300/200" className="carousel-image" />
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
        <button className="carousel-button"> Read All News</button>
      </Container>








    </Container >
  );
}
export default Home2;
