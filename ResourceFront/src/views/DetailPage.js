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
        .get("http://222.98.255.30:12344/resource/getinfoall?date=2023-09-10")
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
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
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
        <Row>
          <Col md="6">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">원자재 실구매가</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">DATE</th>
                      <th className="border-0">ENGNAME</th>
                      <th className="border-0">KORNAME</th>
                      <th className="border-0">PRICE</th>
                      <th className="border-0">UNIT</th>
                    </tr>
                  </thead>
                  <tbody>{resourceTable()}</tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">관련 뉴스</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">DATE</th>
                      <th className="border-0">HEADLINE</th>
                      <th className="border-0">PUBLISHER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* // 데이터 출력 */}
      //<div>{showResource()}</div>
    </>
  );
}

export default DetailPage;
