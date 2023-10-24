import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function Chart(props) {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    // 데이터 포인트마다 색상을 설정하는 새로운 데이터 배열 생성

    const dataWithColors = props.price.map((price, index) => ({
      x: props.date[index],
      y: price,
      color: props.color, // 데이터 포인트의 색상
    }));

    // 그래프 데이터 및 옵션 초기화
    setChartData({
      series: [
        {
          name: props.engName,
          data: dataWithColors, // 데이터 포인트에 색상이 포함됨
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
            curve: "smooth", // 수정: curve 옵션 변경
          },
          title: {
            text: props.korName + " " + props.unit,
            align: "center",
            style: {
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: undefined,
              color: props.color, // 그래프 제목 색상
            },
          },
          grid: {
            row: {
              colors: [props.color, "transparent"], // 그래프 행 색상
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
  }, [props.price, props.date, props.color]);

  return (
    <div id="chart">
      {chartData && (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      )}
    </div>
  );
}

export default Chart;
