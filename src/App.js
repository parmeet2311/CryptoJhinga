import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Working from "./components/HowItWorks/Work";
import Saving from "./components/Savings/saving";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About"
import Launch from "./components/LaunchApp/PrimaryMarket";

import SingleCoin_rough from "./components/HowItWorks/coinpage_rough";
import Swap from "./components/LaunchApp/SwapExchange";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./css/howItWorks.css"
import "./css/defi.css"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux'


function App() {
  const [load, upadateLoad] = useState(true);
  // const singleCoin = useSelector((state) => state.coinlist.coin_Name)


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/howitworks" element={<Working/>} exact/>
          <Route path="/savings" element={<Saving />} exact />
          <Route path="/blog" element={<Blog />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/primary_market" element={<Launch />} exact/>
          <Route path="/swap_exchange" element={<Swap />} exact />
          <Route path="/coins/:id" element={<SingleCoin_rough/>} exact />
          {/* single_coin  SingleCoin_rough */}
          {/* <Route path={`/${singleCoin}`} element={<SingleCoin_rough />} /> */}
          {/* <Route path="/" element={<About />} />
          <Route path="/" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
