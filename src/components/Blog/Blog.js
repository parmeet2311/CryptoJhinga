import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import blogcover from "../../Assets/blog-cover.png";
import playbutton from "../../Assets/playbutton.png"
import article1 from "../../Assets/article1.png";
import article2 from "../../Assets/article2.png";
import article3 from "../../Assets/article3.png";
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png";
import profile3 from "../../Assets/profile3.png";
import profile4 from "../../Assets/profile4.png";
import BlogCard from "./Blog-card";
import BlogCard2 from "./Blog-card2";

function Blog() {
    return (
        <section>
            <Container className="Blog-content">
                <Row >
                    <Col md={7} className="Blog-header" style={{padding:"0px 50px "}}>
                        <p className="heading"><small>Blog</small></p>
                        <h1 className="heading-name">
                            <strong > Blockchain and Crypto</strong>
                        </h1>
                        <h6 style={{ paddingBottom: 15 }} className="heading">
                            Your one-stop guide to all things crypto. Whether you're a rookie trying to understand mining  or a veteran looking to develop a trading strategy, we've got you covered.
                        </h6>
                        <div className="blog-button">
                            <Button>Start Here</Button>
                        </div>
                    </Col>

                    <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={blogcover}
                            alt="home pic"
                            className="img-fluid homelogo"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div style={{ textAlign: "center", paddingTop: "50px" }}>
                    <h2>Top Articles</h2>
                    <div style={{ textAlign: "left", paddingLeft: "70px", paddingTop: "25px", paddingBottom: "25px" }} >
                        <p><strong>Latest Releases</strong></p>
                    </div>
                    <Row style={{ justifyContent: "space-between", padding: "10px 50px" }}>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article1}
                                title="How does it differ from normal ERC-20 smart contract?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article2}
                                title="How to provide on-chain 
                            value using something 
                            off-chain?"
                                description="Support multiple trading pairs to trade 
                            other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article3}
                                title="How to keep the value 
                            stable?"
                                description="Support multiple trading pairs to trade 
                            other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article1}
                                title="Against What do we sell 
                            JHINGA in the initial 
                            phase?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article2}
                                title="Is it necessary to involve 
                            third party finance service 
                            with the project?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article3}
                                title="Where do we fetch INR/USD 
                            values from?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article1}
                                title="How and where the liquidity 
                            will be used?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article2}
                                title="Is going on DEX necessary? "
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article3}
                                title="What difference will it make 
                            on CEX and DEX?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard
                                imgPath={article1}
                                title="What utility can we apply 
                            to the token?"
                                description="Support multiple trading pairs to trade other coins to BUSD"
                                link=""
                            />
                        </Col>

                    </Row>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h2>Latest Videos</h2>
                    <Row style={{ justifyContent: "space-between", padding: "10px 50px" }}>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>
                        <Col md={4} className="blog-card">
                            <BlogCard2
                                imgPath={playbutton}
                                title="JHINGA Token (USD₮) 
                                Launches on Kusama"
                                description="JHINGA Operations Limited (“JHINGA”), 
                                the company operating the blockchain
                                -enabled platform JHINGA.to that 
                                powers. "
                                link=""
                            />
                        </Col>

                    </Row>
                </div>
                <div style={{ textAlign: "center", paddingTop: "50px", paddingLeft: "25px", paddingRight: "25px", paddingBottom: "50px" }}>
                    <h2>Top Viewed Blogs</h2>
                    <div style={{ textAlign: "left", paddingLeft: "70px", paddingTop: "25px" }} >
                        <p><strong>Latest Releases</strong></p>
                    </div>
                    <Row style={{ paddingBottom: "25px" }}>
                        <Col md={4}>
                            <img src={profile1} />
                        </Col>
                        <Col md={8} style={{ textAlign: "left" }}>
                            <p><strong>The Startup Fundraising Process Through Startups mint</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p><a className="topViewedAnchor">Read More</a></p>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "25px" }}>
                        <Col md={4}>
                            <img src={profile2} />
                        </Col>
                        <Col md={8} style={{ textAlign: "left" }}>
                            <p><strong>The Startup Fundraising Process Through Startups mint</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p><a className="topViewedAnchor">Read More</a></p>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "25px" }}>
                        <Col md={4}>
                            <img src={profile3} />
                        </Col>
                        <Col md={8} style={{ textAlign: "left" }}>
                            <p><strong>The Startup Fundraising Process Through Startups mint</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p><a className="topViewedAnchor">Read More</a></p>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "25px" }}>
                        <Col md={4}>
                            <img src={profile4} />
                        </Col>
                        <Col md={8} style={{ textAlign: "left" }}>
                            <p><strong>The Startup Fundraising Process Through Startups mint</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p><a className="topViewedAnchor">Read More</a></p>
                        </Col>
                    </Row>
                    <Button>Read All</Button>
                </div>
            </Container>


        </section>
    )
}
export default Blog;