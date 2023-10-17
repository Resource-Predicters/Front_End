import React, { Component } from "react";
import { ReactDOM } from "react";
import ReactApexChart from "react-apexcharts";
import Card from 'react-bootstrap/Card';


// 자재 이름 + 환률이름
// 가격
// 날짜
class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      series: [
        {
          name: props.engName,
          data: props.price,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
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
            fontSize:  '20px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  props.color
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: props.date,
          // title: {
          //   text: "Month",
          // },
        },
        yaxis: {
          title: {
            text: props.unit,
          },
        },
      },
    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          colors={this.state.options}
        />
      </div>
    );
  }
}

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);

export default ApexChart;
