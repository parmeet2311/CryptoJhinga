import React,{useEffect, useState} from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import LineChartSingle from "./sample_chart"
// import LineChart from "./LineChart_single"
import GameLogo from "../../Assets1/Jhinga-GamingLogo.png"
import Tilt from "react-parallax-tilt";
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import axios from "axios"
import CoinsTable from "./CoinsTable";


function SingleCoin() {

    const { id } = useParams();
    const singleCoin = useSelector((state) => state.coinlist.coin_Name)
   const [coin, setCoin]=useState([]);
   const [selectedCoin, setSelectedCoin] = useState([]);

   const fetchCoin = async()=>{
    const {data} = await axios.get("https://gateway.ipfs.io/ipns/tokens.uniswap.org");
    setCoin(data.tokens);
    // setUsers(data.tokens)
    // console.log(coin)
    fetchSelectedCoin();
   }
   function fetchSelectedCoin(){
    for (let i = 0; i < coin.length; i++) {
        if(coin[i].symbol=== {id}){
            setSelectedCoin(coin[i]);
            break;
        }
      }
   }   
   function priceHistory(){
    let days = 3;
    let i = 1;
    let addrs = "0x111111111117dC0aa78b770fA6A738034120C302"
    let sym = "1INCH"
    


   }
   console.log(coin)
   console.log(selectedCoin);
    useEffect(() => {
        fetchCoin();
        // fetchSelectedCoin()
        // const interval = setInterval(() => fetchSelectedCoin(), 100000);

        // return () => {
        //     clearInterval(interval);
        // };
      }, []);

    

    return (
        <section className="workSection" style={{ justifyContent: "center" }}>
            <Container className="CoinCover">
                <Row>
                    <Col md={7} className="Work-header">
                        <Container className="coin-card" style={{ textAlign: "left" }}>
                            <div>
                                <h5>{id}</h5>
                                <h3>$22,984.19</h3>

                            </div>
                            <div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Market Cap</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> $454,441,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>24 Hour Trading Vol</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> $454,441,1154545</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Fully Diluted Valuation</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> $241,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Circulating Supply</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 141,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Total Supply</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 21,441,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Max Supp</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 21,000,000</strong></p>
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

                <div style={{ padding: "20px 10px" }} >
                    <LineChartSingle /> 
                    {/* <LineChart coin={coin} /> */}
                </div>
            </Container>
            <Container style={{ width: "80%", textAlign: "left", margin: "20px 0px" }}>
                <Row>
                    <Col md={6}>
                        <div style={{ textAlign: "left" }}>
                            <h3>Bitcoin Price Live Data</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
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
                                    <p style={{ fontSize: "0.9em" }}><strong> $454,441,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>24 Hour Trading Vol</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> $454,441,1154545</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Fully Diluted Valuation</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> $241,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Circulating Supply</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 141,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Total Supply</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 21,441,115</strong></p>
                                </div>
                                <div className="coverTable">
                                    <p style={{ color: "grey", fontSize: "0.9em" }}>Max Supp</p>
                                    <p style={{ fontSize: "0.9em" }}><strong> 21,000,000</strong></p>
                                </div>

                            </div>

                        </Container>
                    </Col>
                </Row>
                <Row>
                    <h3>What is Bitcoin (BTC) ?</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>

                    <p><a href="">Read More></a></p>
                </Row>
            </Container>
        </section>
    )
}
export default SingleCoin;