import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import part1 from "../../Assets/part1.png";
import Tilt from "react-parallax-tilt";
import Project from "../Projects/Projects"
import Project2 from "../Projects/Projects2"
import Project3 from "../Projects/Projects3"
import FAQ from "./faq.js";
import Carousel from "./carousel"

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
    <section>
      <Project />
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            
            <Col md={5} className="myAvtar">
              <Tilt>
                <img src={part1} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            <Col md={7} className="home-about-description">
              <h1 style={{fontWeight:"400", fontSize: "2.6em", color: "black" }}>
                100% backed and fully transparent
              </h1>
              <p className="home-about-body" style={{color:"black"}}>
                All JHINGA tokens (USD₮) are pegged at 1-to-1 with a
                matching fiat currency and are backed 100% by
                JHINGA’s reserves. We publish a daily record of the
                current total assets and reserves.
              </p>
              <p style={{ color: "#FFA000", lineHeight: "inherit", fontSize: "large" }}>Learn More ></p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Project3 />
      
      <Project2 />
      
      <Container className="faq-main">
        <h3 style={{ color: "black" }}>FAQ's</h3>

        <hr/>

        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <button className="faq-button">Read All FAQs</button>


      </Container>
      <Carousel />
    </section>
  );
}
export default Home2;
