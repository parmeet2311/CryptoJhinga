import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useMoralis, useTokenPrice } from "react-moralis";
import axios from "axios"
// import Select from 'react-select'
import { Container, Row, Col, Button } from "react-bootstrap";


Chart.register(...registerables);

function LineChart() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();



    let toks = [];


    // async function dailyData() {
    //     const list = [];

    //     let response = await fetch("https://gateway.ipfs.io/ipns/tokens.uniswap.org");
    //     let names = await response.json()
    //     toks = names.tokens;

    //     toks.forEach((e, i) =>
    //         document.getElementById("list").add(new Option(e.symbol, i))
    //     )

    //     // priceHistory()
    // }

    const { fetchTokenPrice, data: formattedData, error, isLoading, isFetching } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });





    //   let prices1 = await Promise.all(blocks1.map(async (e, i) =>
    //             await Moralis.Web3API.token.getTokenPrice({ address: addrs, to_block: e.block })
    //         ));


    // launch()

    // async function priceHistory() {

    //     let days = document.querySelector('input[name="time"]:checked').value;
    //     let i = document.getElementById("list").value
    //     let addrs = toks[i].address
    //     let sym = toks[i].symbol

    //     //Boiler plate examples
    //     let dates = ["2021-09-30", "2021-10-01", "2021-10-02"];
    //     let blocks = [13321721, 13331721, 13341721];
    //     let prices = [4, 6, 3];
    //     //Boiler plate examples
    //     var x = moment();
    //     let dates1 = Array(Number(days)).fill().map((e, i) =>
    //         moment().subtract(i, "d").format("YYYY-MM-DD")
    //     ).reverse();
    //     let blocks1 = await Promise.all(dates1.map(async (e, i) =>
    //         await Moralis.Web3API.native.getDateToBlock({ date: e })
    //     ));
    //     let prices1 = await Promise.all(blocks1.map(async (e, i) =>
    //         await Moralis.Web3API.token.getTokenPrice({ address: addrs, to_block: e.block })
    //     ));
    //     prices1 = prices1.map(e => e.usdPrice);
    //     const data = {
    //         labels: dates1,
    //         datasets: [{
    //             label: sym,
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: prices1,
    //         }]
    //     };

    //     const config = {
    //         type: 'line',
    //         data: data,
    //         options: {}
    //     };

    //     if (window.myChart instanceof Chart) {
    //         myChart.destroy()
    //     }

    //     window.myChart = new Chart(
    //         document.getElementById('myChart'),
    //         config
    //     );

    // }

    // const dailyData = async () => {
    //     const list = [];

    //     await axios
    //         .get(`https://gateway.ipfs.io/ipns/tokens.uniswap.org`)
    //         .then((response) => {
    //             for (let i of response.tokens) {
    //                 list.push(i.symbol)
    //                 //   ltt.push(i.ltt)
    //             }
    //             // setCategory(ltt);
    //             // setPrice(last[last.length() - 1]);
    //             // setData(last);
    //             console.log(">?>", response.tokens);
    //         })
    //         .catch((e) => { });
    // };
    const [coins, setCoin] = useState([]);
    const [users, setUsers] = useState([]);
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



    // useEffect(() => {
    //     dailyData();
    // }, [])





    //     useEffect(() => {
    //     if (isAuthenticated) {
    //       // add your logic here
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    // console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]
   

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }





    function bgGradient(ctx, chartArea, scales) {
        const { left, right, top, bottom, width, height } = chartArea;
        const { x, y } = scales;
        const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBackground.addColorStop(0, '#009800');
        gradientBackground.addColorStop(1, '#FFFFFF')
        return gradientBackground;
    }
    const [data, setData] = useState({
        data: {
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "First Dataset",
                    data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58, 40, 65, 42, 33, 40],
                    // backgroundColor: 'yellow',
                    backgroundColor: (context) => {
                        const chart = context.chart;
                        const { ctx, chartArea, scales } = chart;
                        if (!chartArea) {
                            return null;
                        }
                        return bgGradient(ctx, chartArea, scales);


                    },
                    borderColor: 'green',
                    fill: true,
                    // pointStyle: 'circle',
                    // pointBorderColor: 'blue',
                    // pointBackgroundColor: '#fff',
                    showLine: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontSize: 15,
                                fontColor: 'lightgrey'
                            },
                            display: false
                        }]
                    }
                }
            ]
        },
        options: {


            scales: {
                // y: {
                //     grid: {
                //         display: false
                //     },
                //     display: false
                // },
                x: {
                    grid: {
                        display: false
                    },
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                filler: {
                    propagate: false,
                },
                title: {
                    display: false,
                }
            },
            interaction: {
                intersect: false,
            }
        }
    })
    return (<>
        <button onClick={login}>Login With Metamask</button>

        {/* <div>
        {error && <>{JSON.stringify(error)}</>}
        <button onClick={() => fetchTokenPrice({ params: { address: "0x6...361",  chain: "eth" } })}>Refetch</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div> */}
        <div>
            <input type="radio" name="time" id="week" value={7} checked />
            <input type="radio" name="time" id="2week" value={14} />
            <input type="radio" name="time" id="4week" value={30} />
            {/* <select id="list"></select> */}
        </div >
        <div className="App"
        // style={{ width: '800px', height: '800px' }}
        >
            <Line data={data.data} options={data.options}
                style={{ margin: "0 auto", height: "auto", width: "100%" }}
            />
        </div>
    </>
    );
}

export default LineChart;