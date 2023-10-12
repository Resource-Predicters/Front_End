import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function MainPage() {
  const [resourcedata, setresourceData] = useState({ data: [] });


  // 원자재 데이터 가져오기
  async function getresourceData() {
    try {
      const response = await axios
        .get("http://222.98.255.30:12344/resource/getinfo?date=2023-09-01")
        .then((response) => {
          console.log(response.data);
          let save = [...response.data];
          setresourceData(save);
        });
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }

  useEffect(() => {
    getresourceData();
  }, []);

  // 출력
  function showResource() {
    if (resourcedata.length > 0) {
      return resourcedata.map((realdata2) => (
        <div>
          {realdata2.date}
          {realdata2.engName}
          {realdata2.price}
          {realdata2.symbol}
          {realdata2.unit}
        </div>
      ));
    }
  }
  
  // 자재 테이블
  function resourceTable() {
    if (resourcedata.length > 0) {
      return (
        resourcedata &&
        resourcedata.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.engName}</td>
            <td>{item.korName}</td>
            <td>{item.price}</td>
            <td>{item.symbol}</td>
            <td>{item.unit}</td>
          </tr>
        ))
      );
    }
  }

  // 메인차트 x축
  function rexData() {
    let xline = [];
    if (resourcedata.length > 0) {
      resourcedata.map((realdata) => xline.push(realdata.date, 'YY-MM-DD'));
    }
    return xline;
  }

  // 메인차트 y축
  function reyData() {
    let yline = [];
    if (resourcedata.length > 0) {
      resourcedata.map((realdata) => yline.push(realdata.price));
    }
    return yline;
  }

  // 원자재 차트 반복
  function chartTest() {
    let price = [[],[],[],[]];
    let symbols = [[],[],[],[]];
    let date = [[],[],[],[]];
    let all = []
    let index = 0;
    
    if (resourcedata.length > 0) {
      let symbol = resourcedata[0].symbol;
      symbols[index].push(symbol)
      resourcedata.map((item) => {
        if(symbol == item.symbol)
        {
          price[index].push(item.price)
          date[index].push(item.date)
        }
        else
        {
          all.push({price : price[index], symbols: symbols[index], date: date[index]});
          index = index + 1;          
          symbols[index].push(item.symbol)
          price[index].push(item.price)
          date[index].push(item.date)
          console.log(index);
          console.log(all);
        }
        symbol = item.symbol        
      });
      all.push({price : price[index], symbols: symbols[index], date: date[index]});
      return(all.map((item) => {
        return(
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">{item.symbols}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: item.date,
                        series: 
                          [item.price],
                      }}
                      type="Line"
                      options={options}
                      responsiveOptions={responsiveOptions}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            )
      }))
    } 
  }


  return (
    <>
    <div>{chartTest()}</div>
    </>
  );
}

const options = [
  {
    low: 0,
    high: 800,
    showArea: false,
    height: "245px",
    axisX: {
      showGrid: false,
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 50,
    },
  },
];

const responsiveOptions = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      },
    },
  ],
];


export default MainPage;
