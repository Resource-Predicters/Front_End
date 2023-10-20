import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function Chart(props) {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: props.engName,
        data: props.price,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "line",
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: props.korName + " " + props.unit,
          align: "center",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: props.color,
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: props.date,
        },
        yaxis: {
          title: {
            text: props.unit,
          },
        },
      },
    },
  });

  // forecastDataPoints가 존재하는 경우에만 설정
  if (props.forecastDataPoints) {
    chartData.options.forecastDataPoints = {
      count: props.forecastDataPoints,
    };
  }

  useEffect(() => {
    // props.price 또는 다른 필요한 프롭스가 변경될 때 실행
    setChartData((prevData) => ({
      ...prevData,
      series: [
        {
          name: props.engName,
          data: props.price,
        },
      ],
      options: {
        ...prevData.options,
        xaxis: {
          categories: props.date,
        },
      },
    }));
  }, [props.price, props.date]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Chart;
