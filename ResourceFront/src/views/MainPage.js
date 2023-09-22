import React, { useEffect, useState } from "react";
import axios from 'axios';
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

  const [data, setData] = useState({ data: []});
  const [xData, setXData] = useState();
  
  // data 가져오기
  const getfun = async function getData() {
    try {
      const response = await axios.get('http://10.10.10.105:8080/exchange/getinfoall?date=2023-09-10')
          .then(response => {
              console.log(response.data)
              let save = [...response.data]
              setData(save)
          })
    } catch (error) {
          console.log(error)
          alert('Error')
    }
  }

  useEffect(() => {
    getfun();
  }, [])

  // 출력
  function showData() {
    let x = [];
    if ( data.length > 0 ) {
      return data.map((realdata) => (
        <div key={realdata.date}>
          {realdata.currency}
          {realdata.currencyName}
          {realdata.currencySymbol}
          {realdata.exchangeRate}
        </div>
      ));
    }}
  
    // 꺾은선 그래프 데이터 (x축:date / y축:price)

    // function graphData() {
    //   if(data.length > 0) {
    //     return data.map((graph) => {
    //         <>
    //         data={graph.date}, {graph.currency}
    //         type="Line"
    //         </>
    //     });
    //   }}


   return (
    <>
      <Container fluid>
        {/* // 꺾은선그래프 */}
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">원자재 이름</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695]
                      ],
                    }}
                    type="Line"
                    options = {options}
                    responsiveOptions = {responsiveOptions}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
       {/* // 데이터 출력 */}
     <div>{showData()}</div>
    </>
  );
}

const options = [{
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
}]

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
]


export default MainPage;
