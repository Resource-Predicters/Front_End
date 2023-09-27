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

function DetailPage() {
  const [resourcedata, setresourceData] = useState({ data: [] });

  // data 가져오기
  async function getresourceData() {
    try {
      const response = await axios
        .get("http://222.98.255.30:12344/resource/getinfoall?date=2023-09-20")
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
            <td>{item.unit}</td>
          </tr>
        ))
      );
    }
  }

  function rexData() {
    let xline = [];
    if (resourcedata.length > 0) {
      resourcedata.map((realdata) => xline.push(realdata.date));
    }
    return xline;
  }

  function reyData() {
    let yline = [];
    if (resourcedata.length > 0) {
      resourcedata.map((realdata) => yline.push(realdata.price));
    }
    return yline;
  }

  // 원자재 이름 바꾸기 - 인덱스 순
  // function changeTitle() {
  //   let reTitle;
  //   if (resourcedata.length > 0) {
  //     resourcedata.map((realdata, index) => <div key={index}>{realdata.engName}</div> );
  //   }
  //   return reTitle;
  // }

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
                      labels: rexData(),
                      series: [
                        [reyData()],
                      ],
                    }}
                    type="Line"
                    options={{
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
                    }}
                    responsiveOptions={[
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
                    ]}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* // 자재 데이터 출력
      <div>{showResource()}</div> */}
      
      {/* // 자재 테이블 출력 */}
      <div>{resourceTable() }</div>
    </>
  );
}

export default DetailPage;
