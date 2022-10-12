import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import QuestionMark from "../../Assets1/QuestionMark.png";
import CoinsTable from "./CoinsTable";
import { useMoralisWeb3Api } from "react-moralis";
import axios from "axios";

import { Container, Row, Col, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import Table from "./subcomponent/TableWork";
// import { searchStock } from "../../pages/Portfolio/PortfolioSlice";

function Working() {
  const singleCoin = useSelector((state) => state.coinlist.coin_Name);

  const [coins, setCoin] = useState([]);
  const dailyData = async () => {
    const { data } = await axios.get(
      "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
    );

    setCoin(data.tokens);
  };
  // console.log(singleCoin);
  useEffect(() => {
    dailyData();
    // const interval = setInterval(() => dailyData(), 10000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  // const dispatch = useDispatch()
  const options = {
    address: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    chain: "bsc",
    exchange: "PancakeSwapv2",
  };
  const Web3Api = useMoralisWeb3Api();

  const fetchTokenPrice = async () => {
    //Get token price on PancakeSwap v2 BSC
    const options = {
      address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
      chain: "eth",
      exchange: "uniswap-v3",
    };
    const price = await Web3Api.token.getTokenPrice(options);
    // console.log(price);
    return await Web3Api.token.getTokenPrice(options);
  };

  return (
    <section className="workSection" style={{ justifyContent: "center" }}>
      <Container className="WorkCover">
        <Row>
          <Col md={7} className="Work-header">
            <h1 className="work-heading-name">How It Works</h1>
            <span style={{ paddingBottom: 15 }} className="work-heading">
              Simple & Secure. Search popular coins and start earning.
            </span>
          </Col>

          <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
            <img
              src={QuestionMark}
              alt="home pic"
              className="img-fluid homelogo"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="table-card" style={{ textAlign: "left" }}>
        <div style={{ padding: "20px 10px" }}>
          <h3>Today's Cryptocurrency Prices by Market Cap</h3>
          <small>Click to expand statistics individually</small>
        </div>
        <Table Response={{ coins }} />
      </Container>
      {/* <CoinsTable /> */}

      <div style={{ textAlign: "left", width: "80%" }}>
        <h3>Brief Analytic Charts</h3>
      </div>

      <Container className="table-card" style={{ textAlign: "left" }}>
        <Row>
          <Col md={4} style={{ padding: "30px 20px" }}>
            <div
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
            />
            <span style={{ lineHeight: "4" }}>Jhinga Metaverse</span>
            <h2 className="chartFont">$22,984.19</h2>
          </Col>
          <Col md={8}>
            <div style={{ textAlign: "right", padding: "20px 0px 0px 0px" }}>
              <h2 style={{ padding: "0 15%", color: "green" }}>48.1%</h2>
            </div>
            <LineChart />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Working;
