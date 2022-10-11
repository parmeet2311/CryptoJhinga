import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function LineChartSingle() {
  function bgGradient(ctx, chartArea, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0, "#009800");
    gradientBackground.addColorStop(1, "#FFFFFF");
    return gradientBackground;
  }
  const [data, setData] = useState({
    data: {
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "First Dataset",
          data: [
            10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58, 40, 65, 42, 33, 40,
          ],
          // backgroundColor: 'yellow',
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
          // pointStyle: 'circle',
          // pointBorderColor: 'blue',
          // pointBackgroundColor: '#fff',
          showLine: true,
          scales: {
            xAxes: [
              {
                // gridLines: {
                //     display: false,
                // },
                ticks: {
                  fontSize: 15,
                  fontColor: "lightgrey",
                },
                display: true,
              },
            ],
          },
        },
      ],
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
            display: false,
          },
          display: false,
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
  });
  return (
    <div
      className="App"
      // style={{ width: '800px', height: '800px' }}
    >
      <Line
        data={data.data}
        options={data.options}
        style={{ margin: "0 auto", width: "100%" }}
      />
    </div>
  );
}

export default LineChartSingle;
