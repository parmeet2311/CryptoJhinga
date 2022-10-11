import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { searchCoin } from "../../../redux/coinlistSlice";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// Records.Response.coins

function TableWork() {
  const [coins, setCoin] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleCoin = useSelector((state) => state.coinlist.coin_Name);

  const dailyData = async () => {
    const { data } = await axios.get(
      "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
    );
    // const data='';
    setCoin(data.tokens);
    setUsers(data.tokens);
    // console.log(coins);
  };
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
  console.log(coins);
  function TableImage({ img, symbol }) {
    return (
      <div
        style={{
          display: "flex",
          // justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          style={{
            marginRight: "8px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
          src={img}
          alt=""
        />
        <p>{symbol}</p>
      </div>
    );
  }
  return (
    <div>
      <Container style={{ fontSize: "1.7rem", lineHeight: "1.5" }}>
        <Table responsive hover>
          <thead>
            <tr>
              <th style={{ fontSize: "18px" }}>#</th>
              <th style={{ fontSize: "18px" }}>Name</th>
              <th style={{ fontSize: "18px" }}>Price</th>
              <th style={{ fontSize: "18px" }}>1h %</th>
              <th style={{ fontSize: "18px" }}>24h %</th>
              <th style={{ fontSize: "18px" }}>Market Cap</th>
              <th style={{ fontSize: "18px" }}>Volume(24h)</th>
              <th style={{ fontSize: "18px" }}>Circulting Supply</th>
            </tr>
          </thead>
          {users
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((record, i) => {
              return (
                <tbody>
                  <tr onClick={() => navigate(`/coins/${record.address}`)}>
                    <td style={{ fontSize: "15px" }}>{i}</td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? (
                        <TableImage img={record.logoURI} symbol={record.name} />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                    <td style={{ fontSize: "15px" }}>
                      {" "}
                      {record.name !== null ? record.name : "-"}
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
        {/* {users
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((record, i) => {
            return (
              <Container
                key={i}
                onClick={() =>
                
                  navigate(`/coins/${record.symbol}`)
                }
              >
                
                <Row className="row table-row" style={{ display: "flex" }}>
                 
                  <Col
                    className="table-content"
                    style={{ paddingLeft: "10px" }}
                  >
                    {record.name !== null ? record.name : "-"}
                  </Col>
                  <Col
                    className="table-content"
                    style={{ paddingLeft: "10px" }}
                  >
                    {record.symbol !== null ? record.symbol : "-"}
                  </Col>
                </Row>
          
              </Container>
            );
          })} */}
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
  );
}

export default TableWork;
