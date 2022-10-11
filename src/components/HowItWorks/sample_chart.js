import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useMoralis, useTokenPrice } from "react-moralis";
import axios from "axios";
// import Select from 'react-select'
import { Container, Row, Col, Button } from "react-bootstrap";

Chart.register(...registerables);

function LineChart({ dates, prices }) {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const {
    fetchTokenPrice,
    data: formattedData,
    error,
    isLoading,
    isFetching,
  } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          // console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {});
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  function bgGradient(ctx, chartArea, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0, "#009800");
    gradientBackground.addColorStop(1, "#FFFFFF");
    return gradientBackground;
  }
  const [commingPrices, setcommingPrices] = useState(prices);
  const [commingdates, setcommingdates] = useState(dates);

  useEffect(() => {
    setcommingPrices(prices);
    setcommingdates(dates);
  }, [prices, dates]);

  const graphData = {
    data: {
      labels: commingdates,
      datasets: [
        {
          label: "First Dataset",
          data: commingPrices,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) {
              return null;
            }
            return bgGradient(ctx, chartArea, scales);
          },
          borderColor: "green",
          fill: true,
          showLine: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontSize: 15,
                  fontColor: "lightgrey",
                },
                display: false,
              },
            ],
          },
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: true,
          },
          display: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        filler: {
          propagate: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
    },
  };
  const style = {
    h5: {
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "5px",
      height: "100%",
      borderRadius: "8px",
    },
    activeh5: {
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "5px",
    },
    div: {
      border: "1px solid lightgray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
        <div style={style.div}>
          <h5 style={style.activeh5}>Price</h5>
          <h5 style={style.h5}>Market Cap</h5>
          <h5 style={style.h5}>Trading</h5>
        </div>
        <div style={style.div}>
          <h5 style={style.h5}>24h</h5>
          <h5 style={style.h5}>7d</h5>
          <h5 style={style.h5}>14d</h5>
          <h5 style={style.h5}>30d</h5>
          <h5 style={style.h5}>180d</h5>
          <h5 style={style.h5}>1Y</h5>
          <h5 style={style.h5}>Max</h5>
        </div>
      </div>
      <div className="App">
        <Line
          // data={data1}
          data={graphData.data}
          options={graphData.options}
          style={{ margin: "0 auto", height: "auto", width: "100%" }}
        />
      </div>
    </>
  );
}

export default LineChart;
