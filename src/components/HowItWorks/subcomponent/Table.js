import React, { useState, useMemo, useEffect } from "react";
import axios from "axios"
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from 'react-redux'
import { searchCoin } from "../../../redux/coinlistSlice";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
// Records.Response.coins


function Table() {

    const [coins, setCoin] = useState([]);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const navigate=useNavigate();
    const singleCoin = useSelector((state) => state.coinlist.coin_Name)

    const dailyData = async () => {
        const { data } = await axios.get("https://gateway.ipfs.io/ipns/tokens.uniswap.org");
        // const data='';
        setCoin(data.tokens);
        setUsers(data.tokens)
        // console.log(coins);
    }
    useEffect(() => {
        dailyData();
        const interval = setInterval(() => dailyData(), 100000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    console.log(coins)
    // console.log(Records.Response.coins)
    return (
        <div>
            <Container style={{ fontSize: "1.7rem", lineHeight: "1.5" }}>
                <Row className="row">
                    {/* <Col className="col" style={{ paddingLeft: "10px" }}>#</Col> */}
                    <Col md={6} className="table-heading" style={{ paddingLeft: "10px" }}>Name</Col>
                    <Col md={6} className="table-heading" style={{ paddingLeft: "10px" }}>Symbol</Col>
                </Row>

                {
                    users.slice(pagesVisited, pagesVisited + usersPerPage).map((record, i) => {
                        return (
                            <Container key={i} onClick={() => (
                                // dispatch(searchCoin(record.name)),
                                navigate(`/coins/${record.symbol}`)
                            )} >
                                {/* <a href={`/${singleCoin}`}>  */}
                                    <Row className="row table-row" style={{display:"flex"}}>
                                    {/* <Col className="col" style={{ paddingLeft: "10px" }}>{record !== null ? record : '-'  }</Col> */}
                                    <Col className="table-content" style={{ paddingLeft: "10px" }}>{record.name !== null ? record.name : '-'}</Col>
                                    <Col className="table-content" style={{ paddingLeft: "10px" }}>{record.symbol !== null ? record.symbol : '-'}</Col>
                                </Row>
                                {/* </a> */}
                            </Container>
                        )
                    })
                }

            </Container>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}

            />


        </div>
    )
};

export default Table;
