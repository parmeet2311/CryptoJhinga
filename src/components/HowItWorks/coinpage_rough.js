import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineChartSingle from "./sample_chart";

import * as moment from "moment";
import GameLogo from "../../Assets1/Jhinga-GamingLogo.png";
import Tilt from "react-parallax-tilt";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMoralisWeb3Api } from "react-moralis";
import axios from "axios";

function SingleCoin() {
  const { id } = useParams();
  const singleCoin = useSelector((state) => state.coinlist.coin_Name);
  const Web3Api = useMoralisWeb3Api();
  const [addrs, setaddrs] = useState(id);

  let days = 7;
  const [dates, setDates] = useState();
  const [prices, setPrices] = useState([]);
  const [responseData, setResponseData] = useState();

  const fetchDateToBlock = async () => {
    const arr = [];
    const dates1 = Array(Number(days))
      .fill()
      .map((e, i) => moment().subtract(i, "d").format("YYYY-MM-DD"))
      .reverse();

    setDates(dates1);

    let blocks1 = await Promise.all(
      dates1.map(
        async (e, i) => await Web3Api.native.getDateToBlock({ date: e })
      )
    );
    let prices1 = await Promise.all(
      blocks1.map(
        async (e) =>
          await Web3Api.token.getTokenPrice({
            address: addrs,
            to_block: e.block,
          })
      )
    );
    prices1.map((price) => {
      arr.push(price.usdPrice);
    });
    setPrices(arr);
    console.log(">>>>>>>0", prices1);
  };

  // async function getAddressBySymbol() {
  //   await axios
  //     .get("https://gateway.ipfs.io/ipns/tokens.uniswap.org")
  //     .then((res) => {
  //       setResponseData(res.data.tokens);
  //     });
  // }

  function findAddress(id) {
    responseData.map((ele) => {
      if (ele.symbol === id) {
        addrs = ele.address;
      }
    });
  }

  useEffect(() => {
    // getAddressBySymbol();
    fetchDateToBlock();
    setaddrs(id);
  }, [id]);

  return (
    <section className="workSection" style={{ justifyContent: "center" }}>
      <Container className="CoinCover">
        <Row>
          <Col md={7} className="Work-header">
            <Container className="coin-card" style={{ textAlign: "left" }}>
              <div>
                {/* <h5>{id}</h5> */}
                <h3>$22,984.19</h3>
              </div>
              <div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>Market Cap</p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $454,441,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    24 Hour Trading Vol
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $454,441,1154545</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Fully Diluted Valuation
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $241,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Circulating Supply
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 141,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Total Supply
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 21,441,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>Max Supp</p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 21,000,000</strong>
                  </p>
                </div>
              </div>
            </Container>
          </Col>

          <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={GameLogo}
                alt="home pic"
                className="img-fluid homelogo"
                style={{ maxHeight: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Row style={{ width: "80%", textAlign: "left", margin: "20px 0px" }}>
        <div>
          <h3> Bitcoin Price Chart (BTC/USD)</h3>
          <small>Last updated 00:34am UTC. currency in USD</small>
        </div>
      </Row>

      <Container className="table-card" style={{ textAlign: "left" }}>
        <div style={{ padding: "20px 10px" }}>
          <LineChartSingle prices={prices} dates={dates} />
          {/* <LineChart coin={coin} /> */}
        </div>
      </Container>
      <Container
        style={{ width: "80%", textAlign: "left", margin: "20px 0px" }}
      >
        <Row>
          <Col md={6}>
            <div style={{ textAlign: "left" }}>
              <h3>Bitcoin Price Live Data</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
            </div>
          </Col>
          <Col>
            <Container className="coin-card-1" style={{ textAlign: "left" }}>
              <div>
                <h5>JHINGA Gaming</h5>
                <h3>$22,984.19</h3>
              </div>
              <div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>Market Cap</p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $454,441,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    24 Hour Trading Vol
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $454,441,1154545</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Fully Diluted Valuation
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> $241,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Circulating Supply
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 141,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>
                    Total Supply
                  </p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 21,441,115</strong>
                  </p>
                </div>
                <div className="coverTable">
                  <p style={{ color: "grey", fontSize: "0.9em" }}>Max Supp</p>
                  <p style={{ fontSize: "0.9em" }}>
                    <strong> 21,000,000</strong>
                  </p>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
        <Row>
          <h3>What is Bitcoin (BTC) ?</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </p>

          <p>
            <a href="">Read More</a>
          </p>
        </Row>
      </Container>
    </section>
  );
}
export default SingleCoin;
